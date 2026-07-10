import React, { useEffect, useRef } from 'react';

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const drawStatic = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFFFFF';
        const numStars = Math.floor((canvas.width * canvas.height) / 4000);
        for (let i = 0; i < numStars; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() > 0.8 ? 4 : 2;
          ctx.fillRect(x, y, size, size);
        }
      };
      drawStatic();
      window.addEventListener('resize', drawStatic);
      return () => window.removeEventListener('resize', drawStatic);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() > 0.8 ? 4 : 2, // Blocky stars (2x2 or 4x4)
          speed: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FFFFFF';
      stars.forEach(star => {
        // Draw square, blocky stars for 16-bit feel
        ctx.fillRect(star.x, star.y, star.size, star.size);
        
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" role="presentation" />
      {/* Scanlines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,1) 50%)',
          backgroundSize: '100% 4px'
        }}
      />
    </div>
  );
}
