'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeCheck, BarChart3, Sprout, Zap, Timer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!panelsContainerRef.current || !panelsSectionRef.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.panel');
      const container = panelsContainerRef.current!;

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
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
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

  return (
    <section className="relative text-white overflow-hidden">
      {/* Pinned horizontal panels */}
      <div ref={panelsSectionRef} className="relative h-screen w-full overflow-hidden">
        {/* Background — transparent so the cinematic video shows through */}
        <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] rounded-full bg-white/5 blur-3xl" />

        {/* Section header (stays while pinned) */}
        <div className="absolute top-0 left-0 w-full text-center pt-20 z-20 px-6 pointer-events-none">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent-400 mb-4">
            Why VY Marine
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Built on trust. Proven at sea.
          </h2>
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

                <div className="relative border border-white/10 bg-white/5 p-10 sm:p-14 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-11 h-11 bg-white/5 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent-400" />
                    </div>
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-56">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40 mb-2">
            <span>01</span>
            <span>{String(storyTimeline.length).padStart(2, '0')}</span>
          </div>
          <div className="h-0.5 w-full bg-white/15 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full w-full bg-accent-400 origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
