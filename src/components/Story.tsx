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

const StoryCard: React.FC<StoryCardProps> = ({ 
  year, 
  title, 
  description, 
  isLast = false, 
  isActive = false,
  index,
  icon
}) => {
  const cardVariants = [
    { from: 'rgb(37, 99, 235)', to: 'rgb(29, 78, 216)', accent: 'rgb(59, 130, 246)' }, // blue
    { from: 'rgb(5, 150, 105)', to: 'rgb(4, 120, 87)', accent: 'rgb(16, 185, 129)' }, // emerald
    { from: 'rgb(217, 119, 6)', to: 'rgb(180, 83, 9)', accent: 'rgb(245, 158, 11)' }, // amber
    { from: 'rgb(225, 29, 72)', to: 'rgb(190, 18, 60)', accent: 'rgb(244, 63, 94)' }, // rose
    { from: 'rgb(79, 70, 229)', to: 'rgb(67, 56, 202)', accent: 'rgb(99, 102, 241)' }, // indigo
    { from: 'rgb(13, 148, 136)', to: 'rgb(15, 118, 110)', accent: 'rgb(20, 184, 166)' } // teal
  ];

  const currentVariant = cardVariants[index % cardVariants.length];

  return (
    <div 
      className={`relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
        isActive 
          ? 'text-white shadow-2xl scale-100 opacity-100 translate-y-0' 
          : 'bg-white/90 backdrop-blur-md text-gray-800 shadow-lg border border-gray-200/50 scale-[0.92] opacity-60 translate-y-3'
      }`}
      style={{
        minHeight: '380px',
        display: 'flex',
        flexDirection: 'column',
        willChange: 'transform, opacity',
      }}
    >
      {/* Animated gradient background with shimmer effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `linear-gradient(135deg, ${currentVariant.from}, ${currentVariant.to}, ${currentVariant.accent})`,
          backgroundSize: '300% 300%',
          animation: isActive ? 'gradientShift 6s ease infinite' : 'none',
        }}
      />
      
      {/* Overlay shimmer effect */}
      {isActive && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s ease-in-out infinite',
          }}
        />
      )}
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full">
      
        
        {/* Year/Category tag */}
        <div className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wider mb-3 sm:mb-4 px-3 py-1 rounded-full w-fit transition-all duration-500 ${
          isActive ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-blue-50 text-blue-600'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-blue-600'}`}></span>
          {year}
        </div>
        
        {/* Icon */}
        {icon && (
          <div className={`p-2.5 sm:p-3 inline-flex rounded-xl sm:rounded-2xl mb-4 sm:mb-5 transition-all duration-500 ${
            isActive ? 'bg-white/15 backdrop-blur-sm shadow-lg' : 'bg-blue-50/80'
          } w-12 h-12 sm:w-14 sm:h-14 items-center justify-center transform ${isActive ? 'scale-110' : 'scale-100'}`}>
            <span className={`text-2xl sm:text-3xl transition-all duration-500 ${isActive ? 'text-white drop-shadow-lg' : 'text-blue-600'}`}>
              {icon}
            </span>
          </div>
        )}
        
        {/* Title */}
        <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight transition-all duration-500 ${
          isActive ? 'text-white drop-shadow-md' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed transition-all duration-500 ${
          isActive ? 'text-white/95' : 'text-gray-600'
        }`}>
          {description}
        </p>
        
        {/* Learn more button - only show when active */}
        <div className={`mt-auto pt-4 transition-all duration-500 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/20">
            <span className="text-xs sm:text-sm font-semibold tracking-wide">LEARN MORE</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all hover:scale-110 hover:shadow-xl cursor-pointer group">
              <svg className="w-4 h-4 text-gray-800 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const storyTimeline: StoryItem[] = [
    {
      year: 'Global Reach',
      title: 'Vendor Network',
      description: 'Extensive network across UAE, India, UK, and China, connecting you with trusted partners worldwide.',
      icon: '🌍'
    },
    {
      year: 'Quality',
      title: 'Certified Partnerships',
      description: 'Exclusive partnerships with ISO-certified manufacturers ensuring the highest quality standards.',
      icon: '✅'
    },
    {
      year: 'Transparency',
      title: 'Project Reporting',
      description: 'Comprehensive, milestone-based project reporting keeping you informed at every step.',
      icon: '📊'
    },
    {
      year: 'Sustainability',
      title: 'Responsible Sourcing',
      description: 'Mindful sourcing practices that prioritize environmental responsibility and sustainability.',
      icon: '🌱'
    },
    {
      year: 'Efficiency',
      title: 'Rapid Response',
      description: '72-hour typical lead time to shortlist qualified vendors for your specific needs.',
      icon: '⚡'
    },
    {
      year: 'Reliability',
      title: 'On-time Delivery',
      description: '97% on-time delivery rate across all orders, ensuring your projects stay on schedule.',
      icon: '⏱️'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !scrollContainerRef.current) return;

    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    // Kill any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars?.trigger === container) {
        trigger.kill();
      }
    });
    
    // Calculate dimensions with mobile optimization
    const updateSizes = () => {
      const cards = scrollContainer.querySelectorAll('.story-card');
      if (cards.length === 0) return null;
      
      const containerWidth = container.offsetWidth;
      const isMobileView = window.innerWidth < 768;
      let totalWidth = 0;
      
      cards.forEach((card, index) => {
        totalWidth += (card as HTMLElement).offsetWidth;
        if (index < cards.length - 1) {
          const style = window.getComputedStyle(card);
          totalWidth += parseInt(style.marginRight) || 0;
        }
      });
      
      // Add extra padding at the end for better last card visibility
      totalWidth += containerWidth * 0.4;
      
      return { containerWidth, totalWidth, isMobileView };
    };
    
    const sizes = updateSizes();
    if (!sizes) return;
    
    const { containerWidth, totalWidth, isMobileView } = sizes;
    const scrollDistance = totalWidth - containerWidth;

    // Create the horizontal scroll animation
    const getScrollEnd = () => {
      if (isMobileView) {
        // For mobile, adjust the scroll distance to ensure cards are fully visible
        return `+=${scrollDistance + (containerWidth * 0.2)}`;
      }
      return `+=${Math.max(totalWidth * 1.8, 3000)}`;
    };

    scrollTween.current = gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: isMobileView ? 1.2 : 0.8, // Smoother scrub on mobile
        start: isMobileView ? 'top top+=100' : 'top top', // Start earlier on mobile
        end: getScrollEnd,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (!self.isActive) return;
          
          const progress = self.progress;
          const cardCount = storyTimeline.length;
          
          // Calculate active index with mobile optimization
          let newIndex = Math.min(
            Math.floor(progress * cardCount * 0.99), // Slight adjustment for better mobile feel
            cardCount - 1
          );
          
          // Ensure we don't go below 0
          newIndex = Math.max(0, newIndex);
          
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
          }
        }
      }
    });

    // Handle window resize with debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (scrollTween.current) {
        scrollTween.current.scrollTrigger?.kill();
        scrollTween.current.kill();
      }
    };
  }, [activeIndex, storyTimeline.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50" id="about">
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-8 sm:mb-12 md:mb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-wide">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Advantages</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3">
            Family-owned business with global reach, blending engineering rigor with relationship-driven trade.
          </p>
          
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Every project receives senior attention, transparent communication, and end-to-end logistics support.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div 
        ref={containerRef} 
        className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-screen lg:min-h-[600px] lg:max-h-[800px] overflow-hidden touch-pan-x"
      >
        {/* Scroll instruction - desktop only */}
        {!isMobile && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-xs font-medium text-gray-600">Scroll to explore</span>
          </div>
        )}
        
        <div className="h-full w-full flex items-center">
          <div 
            ref={scrollContainerRef}
            className="flex items-center h-full py-8 sm:py-12 md:py-16 pl-4 sm:pl-8 md:pl-16 lg:pl-32"
          >
            {storyTimeline.map((item, index) => (
              <div 
                key={index}
                className="story-card"
                style={{
                  marginRight: index < storyTimeline.length - 1 ? '20px' : '0',
                }}
              >
                <StoryCard 
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  isLast={index === storyTimeline.length - 1} 
                  isActive={index === activeIndex}
                  index={index} 
                  icon={item.icon}              
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center z-20">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50">
            {storyTimeline.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-600 to-blue-400' 
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}