'use client';
import * as React from 'react';
import { Fade, Slide } from '@mui/material';

type AnimatedProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;          // ms
  once?: boolean;
  threshold?: number;      // 0..1
};

export default function Animated({
  children,
  direction = 'up',
  delay = 0,
  once = true,
  threshold = 0.15,
}: AnimatedProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return (
    <div ref={ref}>
      <Fade in={inView} style={{ transitionDelay: `${delay}ms` }}>
        <div>
          <Slide in={inView} direction={direction} timeout={600}>
            <div>{children}</div>
          </Slide>
        </div>
      </Fade>
    </div>
  );
}
