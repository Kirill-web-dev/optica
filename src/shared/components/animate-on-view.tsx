"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export const AnimateOnView = ({ children, delay, className, animationClass }: { children: ReactNode; delay: number; className?: string; animationClass: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? animationClass : "opacity-0"}`}>
      {children}
    </div>
  );
};
