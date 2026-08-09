'use client';

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { BadgeCheck, BarChart3, Sprout, Zap, Timer, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const storyTimeline = [
  {
    kicker: 'Quality',
    title: 'Certified Partnerships',
    description:
      'Our partnerships with ISO-certified manufacturers guarantee that every product meets international standards of excellence.',
    icon: BadgeCheck,
  },
  {
    kicker: 'Transparency',
    title: 'Project Reporting',
    description:
      "With transparent, milestone-based project tracking, you're always informed at every step of the journey.",
    icon: BarChart3,
  },
  {
    kicker: 'Sustainability',
    title: 'Responsible Sourcing',
    description:
      'Our sourcing practices prioritize environmental stewardship and sustainability in every decision we make.',
    icon: Sprout,
  },
  {
    kicker: 'Efficiency',
    title: 'Rapid Response',
    description:
      'We move fast — with a typical 72-hour lead time to shortlist qualified vendors for your unique needs.',
    icon: Zap,
  },
  {
    kicker: 'Reliability',
    title: 'On-time Delivery',
    description:
      'With a 97% on-time delivery rate, we ensure your projects stay on schedule without compromise.',
    icon: Timer,
  },
];

const Story = () => {
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsSectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLButtonElement[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!panelsContainerRef.current || !panelsSectionRef.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.panel');
      const container = panelsContainerRef.current!;
      const lastIndex = panels.length - 1;

      gsap.set(container, { width: `${panels.length * 100}%` });

      tweenRef.current = gsap.to(panels, {
        x: () => -1 * (container.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: panelsSectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progressRef.current) {
              progressRef.current.style.width = `${progress * 100}%`;
            }
            if (scrollHintRef.current) {
              gsap.to(scrollHintRef.current, { opacity: progress > 0.03 ? 0 : 1, duration: 0.3 });
            }

            const activeIndex = Math.min(lastIndex, Math.round(progress * lastIndex));
            if (counterRef.current) {
              counterRef.current.textContent = String(activeIndex + 1).padStart(2, '0');
            }
            dotsRef.current.forEach((dot, i) => {
              dot.classList.toggle('is-active', i === activeIndex);
            });
          },
        },
      });

      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel.querySelector('.panel-content'),
          { opacity: 0, x: i === 0 ? 0 : 120, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tweenRef.current || undefined,
              start: 'left center',
              end: 'right center',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, panelsSectionRef);

    return () => ctx.revert();
  }, []);

  const goToPanel = (index: number) => {
    const scrollTrigger = tweenRef.current?.scrollTrigger;
    if (!scrollTrigger) return;
    const target = gsap.utils.mapRange(
      0,
      1,
      scrollTrigger.start,
      scrollTrigger.end,
      index / (storyTimeline.length - 1)
    );
    gsap.to(window, { duration: 1, ease: 'power2.inOut', scrollTo: { y: target } });
  };

  return (
    <section className="relative text-white overflow-hidden">
      {/* Pinned horizontal panels */}
      <div ref={panelsSectionRef} className="relative h-screen w-full overflow-hidden">
        {/* Section header (stays while pinned) */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center text-center pt-20 z-20 px-6 pointer-events-none">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent-400 mb-4">
            Why VY Marine
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Built on trust. Proven at sea.
          </h2>

          {/* Scroll affordance — hints that this section scrolls horizontally */}
          <span
            ref={scrollHintRef}
            className="mt-6 text-[11px] uppercase tracking-[0.25em] text-white/35"
          >
            Keep scrolling
          </span>
        </div>

        <div
          ref={panelsContainerRef}
          className="relative flex flex-nowrap w-full h-full overflow-hidden"
        >
          {storyTimeline.map((item, index) => (
            <div
              key={index}
              id={`panel-${index + 1}`}
              className="panel w-screen h-full flex items-center justify-center px-6 sm:px-10 pt-24"
            >
              <div className="panel-content relative max-w-3xl w-full">
                {/* Giant outlined index */}
                <span className="font-display text-[9rem] sm:text-[13rem] font-bold leading-none text-outline absolute -top-24 sm:-top-36 -left-2 select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative border border-white/10 bg-white/5 p-10 sm:p-14">
                  <div className="flex items-center gap-3 mb-7">
                    <item.icon className="h-5 w-5 text-accent-400" />
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400">
                      {item.kicker}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-5 text-white">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-white/65 max-w-xl">
                    {item.description}
                  </p>

                  <div className="mt-8 h-0.5 w-16 bg-accent-400" />

                  {index === storyTimeline.length - 1 && (
                    <Link
                      href="/services"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent-400 transition-colors duration-300"
                    >
                      Explore our services
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress rail with clickable step navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-xs px-6">
          <div className="flex items-center gap-4">
            <span ref={counterRef} className="font-display text-sm text-white/60 tabular-nums w-6">
              01
            </span>

            <div className="relative flex-1 h-4 flex items-center">
              <div className="absolute inset-x-0 h-px bg-white/15">
                <div
                  ref={progressRef}
                  className="h-px bg-accent-400"
                  style={{ width: '0%' }}
                />
              </div>
              <div className="relative flex justify-between w-full">
                {storyTimeline.map((item, index) => (
                  <button
                    key={item.title}
                    ref={(el) => {
                      if (el) dotsRef.current[index] = el;
                    }}
                    type="button"
                    onClick={() => goToPanel(index)}
                    aria-label={`Go to ${item.title}`}
                    className="story-dot group relative flex h-4 w-4 items-center justify-center focus-visible:outline-none"
                  >
                    <span className="story-dot-core h-1.5 w-1.5 rounded-full bg-white/30 transition-colors duration-300 group-hover:bg-white/60" />
                  </button>
                ))}
              </div>
            </div>

            <span className="font-display text-sm text-white/30 tabular-nums w-6 text-right">
              {String(storyTimeline.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
