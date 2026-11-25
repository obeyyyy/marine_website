'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';

/**
 * A fixed-position, scroll-scrubbed cinematic video that stays pinned
 * behind all page content. The video plays frame-by-frame as the user
 * scrolls through the entire page, then fades to navy near the bottom
 * so the footer handoff is clean.
 *
 * Uses requestVideoFrameCallback (where available) for smooth frame
 * timing, and sets currentTime directly — no easing/chase loop —
 * because incremental seeking causes micro-stutters.
 */
export default function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMetadata = useRef(false);
  const requestedLoad = useRef(false);
  const latestProgress = useRef(0);
  const seekFrame = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    latestProgress.current = v;
    if (shouldReduceMotion || v < 0.005) return;

    const video = videoRef.current;
    if (!video) return;

    // Defer the large video request until the visitor starts scrolling.
    if (!requestedLoad.current) {
      requestedLoad.current = true;
      video.load();
    }

    if (!hasMetadata.current || seekFrame.current !== null) return;
    seekFrame.current = requestAnimationFrame(() => {
      seekFrame.current = null;
      const targetTime = Math.min(latestProgress.current, 0.999) * video.duration;
      if (Number.isFinite(targetTime) && Math.abs(video.currentTime - targetTime) > 0.02) {
        video.currentTime = targetTime;
      }
    });
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      hasMetadata.current = true;
      const targetTime = Math.min(latestProgress.current, 0.999) * video.duration;
      if (Number.isFinite(targetTime)) video.currentTime = targetTime;
    };
    video.addEventListener('loadedmetadata', onLoaded);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      if (seekFrame.current !== null) cancelAnimationFrame(seekFrame.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Scrubbed video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        poster="/images/ship-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ship-scrub.mp4" type="video/mp4" />
      </video>

      {/* Cinematic grade — flat darkening, no gradients */}
      <div className="absolute inset-0 bg-navy-950/55" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(4,13,26,0.65)]" />

      {/* Fade to solid navy for footer handoff */}
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="absolute inset-0 bg-navy-950"
      />
    </div>
  );
}
