"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface StoryItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

const Story = () => {
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsSectionRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const storyTimeline: StoryItem[] = [
    {
      year: "Global Reach",
      title: "Vendor Network",
      description:
        "A worldwide network connecting partners across UAE, India, UK, and China, ensuring you access the best resources globally.",
      icon: "🌍",
    },
    {
      year: "Quality",
      title: "Certified Partnerships",
      description:
        "Our partnerships with ISO-certified manufacturers guarantee that every product meets international standards of excellence.",
      icon: "✅",
    },
    {
      year: "Transparency",
      title: "Project Reporting",
      description:
        "With transparent, milestone-based project tracking, you're always informed at every step of the journey.",
      icon: "📊",
    },
    {
      year: "Sustainability",
      title: "Responsible Sourcing",
      description:
        "Our sourcing practices prioritize environmental stewardship and sustainability in every decision we make.",
      icon: "🌱",
    },
    {
      year: "Efficiency",
      title: "Rapid Response",
      description:
        "We move fast — with a typical 72-hour lead time to shortlist qualified vendors for your unique needs.",
      icon: "⚡",
    },
    {
      year: "Reliability",
      title: "On-time Delivery",
      description:
        "With a 97% on-time delivery rate, we ensure your projects stay on schedule without compromise.",
      icon: "⏱️",
    },
  ];

  // Horizontal scroll setup
  useLayoutEffect(() => {
    if (!panelsContainerRef.current || !panelsSectionRef.current) return;
    const panels = gsap.utils.toArray(".panel");
    const container = panelsContainerRef.current;

    gsap.set(container, { width: `${panels.length * 100}%` });

    tweenRef.current = gsap.to(panels as gsap.TweenTarget[], {
      x: () => -1 * (container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: panelsSectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${container.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Animate panels as they come into view
    panels.forEach((panel: any, i) => {
      gsap.fromTo(
        panel.querySelector(".panel-content"),
        {
          opacity: 0,
          x: i % 2 === 0 ? 100 : -100,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tweenRef.current || undefined,
            start: "left center",
            end: "right center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      tweenRef.current?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToPanel = (index: number) => {
    const panel = document.getElementById(`panel-${index + 1}`);
    panel?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-slate-100 text-slate-900">
      {/* Section Header */}
      <div className="absolute top-0 left-0 w-full text-center py-16 bg-gradient-to-b from-white/70 to-transparent backdrop-blur-sm z-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Our Story
        </h2>
        <p className="mt-4 text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto px-6">
          A journey built on trust, innovation, and reliability — connecting
          the world through sustainable and transparent partnerships.
        </p>
      </div>

      {/* Panels Section */}
      <div ref={panelsSectionRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={panelsContainerRef}
          className="flex flex-nowrap w-full h-full overflow-hidden"
        >
          {storyTimeline.map((item, index) => (
            <div
            key={index}
            id={`panel-${index + 1}`}
            className="panel w-screen h-full flex items-center justify-center px-6 sm:px-10"
          >
            <div
              className={`panel-content max-w-2xl w-11/12 text-center rounded-3xl border shadow-2xl backdrop-blur-xl p-10 transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] relative overflow-hidden
                ${index % 6 === 0
                  ? "bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white border-blue-400/50"
                  : index % 6 === 1
                  ? "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 text-white border-fuchsia-400/50"
                  : index % 6 === 2
                  ? "bg-gradient-to-br from-emerald-500 via-green-400 to-lime-500 text-white border-green-400/50"
                  : index % 6 === 3
                  ? "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-400 text-white border-amber-400/50"
                  : index % 6 === 4
                  ? "bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 text-white border-rose-400/50"
                  : "bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 text-white border-cyan-300/50"
                }`}
            >
              {/* Glow animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-700 animate-pulse" />

              <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-white/30">
                <span className="text-lg">{item.icon}</span>
                {item.year}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-md">
                {item.title}
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-white/90 font-light">
                {item.description}
              </p>
            </div>
          </div>

          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg">
        {storyTimeline.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToPanel(index)}
            className="relative group"
          >
            <div className="w-3.5 h-3.5 bg-blue-300 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-500" />
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs text-slate-700 bg-white/90 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow">
              {item.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Story;
