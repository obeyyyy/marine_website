'use client';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface StoryCardProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  isActive?: boolean;
  index: number;
  icon?: string;
}

interface StoryItem {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

const StoryCard: React.FC<StoryCardProps> = ({ 
  year, 
  title, 
  description, 
  isLast = false, 
  isActive = false,
  index,
  icon
}) => (
  <div 
    className={`relative flex-shrink-0 w-80 md:w-96 p-8 rounded-2xl mx-4 transition-all duration-500 ease-out ${
      isActive 
        ? 'bg-gradient-to-br from-blue-600 to-blue-800 text-white scale-105 shadow-2xl' 
        : 'bg-white/80 backdrop-blur-sm text-gray-800 scale-95 shadow-lg hover:scale-100 hover:shadow-xl'
    } ${isLast ? 'mr-0' : ''}`}
  >
    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
      {index + 1}
    </div>
    <div className={`text-2xl font-bold mb-2 ${isActive ? 'text-blue-100' : 'text-blue-600'}`}>
      {year}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className={isActive ? 'text-blue-50' : 'text-gray-600'}>{description}</p>
    {icon && (
      <div className="mt-4 text-3xl">
        {icon}
      </div>
    )}
    {isActive && (
      <div className="absolute -bottom-4 right-6 w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    )}
  </div>
);

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;

    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    const cards = gsap.utils.toArray<HTMLElement>('.story-card');
    
    // Set initial state
    gsap.set(scrollContainer, { x: 0 });
    
    // Calculate the total width needed for all cards
    const totalWidth = cards.reduce((acc, card) => {
      return acc + (card.offsetWidth + 32); // 32px for mx-4 (16 on each side)
    }, 0);
    
    // Set the width of the scroll container
    gsap.set(scrollContainer, { width: totalWidth });

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(scrollContainer, {
      x: () => -(totalWidth - (container.offsetWidth || 0)),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Fade in/out cards based on scroll position
          const progress = self.progress;
          const cardProgress = 1 / (cards.length - 1);
          
          cards.forEach((card, i) => {
            const cardStart = i * cardProgress;
            const cardEnd = (i + 1) * cardProgress;
            
            if (progress >= cardStart && progress <= cardEnd) {
              const cardProgress = (progress - cardStart) / (cardEnd - cardStart);
              gsap.to(card, { 
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.3
              });
            } else {
              gsap.to(card, { 
                opacity: 0.7,
                y: 20,
                scale: 0.95,
                duration: 0.3
              });
            }
          });
        }
      }
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  const storyTimeline: StoryItem[] = [
    {
      year: '2010',
      title: 'Humble Beginnings',
      description: 'Founded with a vision to revolutionize marine services with just a small team of passionate engineers.',
      icon: '🚢'
    },
    {
      year: '2013',
      title: 'First Major Contract',
      description: 'Secured our first major contract with a leading shipping company, marking our entry into the global market.',
      icon: '📜'
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Expanded operations to three continents, establishing regional offices in key maritime hubs.',
      icon: '🌍'
    },
    {
      year: '2019',
      title: 'Innovation Milestone',
      description: 'Launched our proprietary marine technology platform, revolutionizing how we deliver services.',
      icon: '💡'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded the prestigious Maritime Excellence Award for innovation and sustainability.',
      icon: '🏆'
    },
    {
      year: '2024',
      title: 'Looking Ahead',
      description: 'Continuing to push boundaries in marine services with cutting-edge technology and sustainable solutions.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20  relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-1">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Our Story Through <span className="text-blue-600">The Years</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Scroll horizontally to explore our journey from a small startup to a global leader in marine services.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div 
        ref={containerRef} 
        className="relative h-[80vh] overflow-y-hidden"
      >
        <div 
          ref={scrollContainerRef}
          className="absolute top-0 left-0 h-full flex items-center px-4 sm:px-8 lg:px-16"
        >
          {storyTimeline.map((item, index) => (
            <div 
              key={index}
              className="story-card opacity-0 transform translate-y-10 scale-95"
              style={{
                opacity: index === 0 ? 1 : 0.7,
                transform: index === 0 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
              }}
            >
              <StoryCard 
                year={item.year}
                title={item.title}
                description={item.description}
                isLast={index === storyTimeline.length - 1} index={index} icon={item.icon}              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
     
    </section>
  );
