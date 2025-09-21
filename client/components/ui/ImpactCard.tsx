// components/ImpactCard.tsx
import React, { useEffect, useRef, useState } from 'react';

interface ImpactCardProps {
  headline: string;
  text: string;
  targetCount: number;
  unit: string;
  suffix?: string; // e.g., '+'
  visualDescription: string; // Description for the animated visual
  tooltipContent: string; // Content for the interactive tooltip
}

// Simple counter animation hook
const useCounter = (target: number, duration: number = 2000, startOnScroll: boolean = false) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null); // Ref for the element to observe

  useEffect(() => {
    if (!startOnScroll) {
      // If not starting on scroll, start immediately
      let start = 0;
      const end = target;
      if (start === end) return;

      const incrementTime = duration / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      // If starting on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const incrementTime = duration / end;
            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === end) {
                clearInterval(timer);
                observer.disconnect(); // Stop observing once animated
              }
            }, incrementTime);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [target, duration, startOnScroll]); // Dependencies

  return { count, ref };
};


const ImpactCard: React.FC<ImpactCardProps> = ({
  headline,
  text,
  targetCount,
  unit,
  suffix = '',
  visualDescription,
  tooltipContent,
}) => {
  // Use the counter hook to animate numbers on scroll
  const { count, ref } = useCounter(targetCount, 2000, true);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div ref={ref} className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
      {/* Placeholder for Animated Visual */}
      <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
        {/* Replace this div with your actual Lottie/SVG animation component */}
        <span className="text-sm font-semibold text-white">{visualDescription}</span>
        {/* Example of a subtle animation inside the visual placeholder */}
        <div className="absolute inset-0 animate-pulse bg-white opacity-20 rounded-full"></div>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2">{headline}</h3>
      <p className="text-muted-foreground mb-4">{text}</p>
      
      {/* Dynamic Counter */}
      <div 
        className="relative text-5xl font-extrabold text-primary mb-4 cursor-help"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {count.toLocaleString()}{suffix} {unit}
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap opacity-0 animate-fadeIn">
            {tooltipContent}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ImpactCard;