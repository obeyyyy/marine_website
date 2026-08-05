'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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
  const targetTime = useRef(0);
  const hasMetadata = useRef(false);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const video = videoRef.current;
    if (!video || !hasMetadata.current) return;
    targetTime.current = Math.min(v, 0.999) * video.duration;
    // Set currentTime directly — no chase, no easing.
    // The browser decodes the nearest keyframe to this position.
    if (Math.abs(video.currentTime - targetTime.current) > 0.02) {
      video.currentTime = targetTime.current;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      hasMetadata.current = true;
      // Start at first frame
      video.currentTime = 0;
    };
    video.addEventListener('loadedmetadata', onLoaded);

    // Force the video to load all frames into memory for faster seeking
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Scrubbed video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
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
