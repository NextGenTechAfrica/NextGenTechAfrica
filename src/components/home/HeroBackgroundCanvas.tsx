import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  isCyan: boolean;
}

export const HeroBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Just render static soft radial glow
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.parentElement?.clientWidth ? canvas.parentElement.clientWidth * dpr : 1200;
      canvas.height = canvas.parentElement?.clientHeight ? canvas.parentElement.clientHeight * dpr : 800;
      ctx.scale(dpr, dpr);
      const gradient = ctx.createRadialGradient(
        canvas.width / (2 * dpr),
        canvas.height / (3 * dpr),
        10,
        canvas.width / (2 * dpr),
        canvas.height / (3 * dpr),
        canvas.width / (1.5 * dpr)
      );
      gradient.addColorStop(0, 'rgba(0, 196, 212, 0.08)');
      gradient.addColorStop(1, 'rgba(7, 9, 11, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      return;
    }

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const particles: Particle[] = [];
    const particleCount = 42; // tasteful, lightweight count
    const connectionDistance = 140;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-seed particles inside viewport
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.8 + 1,
          baseAlpha: Math.random() * 0.4 + 0.15,
          isCyan: Math.random() > 0.65, // ~35% are cyan, others silver/slate
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background ambient radial gradients
      const radialGradient = ctx.createRadialGradient(
        width / 2,
        height * 0.35,
        20,
        width / 2,
        height * 0.35,
        width * 0.6
      );
      radialGradient.addColorStop(0, 'rgba(0, 196, 212, 0.07)');
      radialGradient.addColorStop(0.6, 'rgba(11, 14, 18, 0.02)');
      radialGradient.addColorStop(1, 'rgba(7, 9, 11, 0)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds softly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Gentle mouse interaction
        const dxMouse = mouseX - p.x;
        const dyMouse = mouseY - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 100) {
          const force = (100 - distMouse) / 100;
          p.x -= (dxMouse / distMouse) * force * 0.5;
          p.y -= (dyMouse / distMouse) * force * 0.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.isCyan) {
          ctx.fillStyle = `rgba(0, 196, 212, ${p.baseAlpha + 0.1})`;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${p.baseAlpha})`;
        }
        ctx.fill();

        // Connect particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            if (p.isCyan || p2.isCyan) {
              ctx.strokeStyle = `rgba(0, 196, 212, ${alpha * 0.8})`;
            } else {
              ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`;
            }
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
