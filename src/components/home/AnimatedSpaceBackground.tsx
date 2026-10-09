import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isCyan: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  active: boolean;
}

export const AnimatedSpaceBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Live Simulated Satellite Telemetry for realistic orbital feed feel
  const [telemetry, setTelemetry] = useState({
    alt: 418.4,
    vel: 7.66,
    lat: '24.8° N',
    lon: '76.3° W',
  });

  // Periodically update telemetry coordinates & micro-drift
  useEffect(() => {
    let tick = 0;
    const timer = setInterval(() => {
      tick++;
      setTelemetry({
        alt: +(418.3 + Math.sin(tick * 0.15) * 0.4).toFixed(1),
        vel: +(7.66 + Math.cos(tick * 0.2) * 0.02).toFixed(2),
        lat: `${(24.8 + (tick * 0.04) % 1.5).toFixed(1)}° N`,
        lon: `${(76.3 + (tick * 0.06) % 2.0).toFixed(1)}° W`,
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax Effect with smooth inertia lerp damping
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      // Smooth lerp damping
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      setMouseOffset({
        x: currentX * 14, // max 14px shift
        y: currentY * 9,  // max 9px shift
      });

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Canvas Starfield, Twinkling, and Occasional Shooting Star
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    let animId: number;
    const stars: Star[] = [];
    const starCount = 80;

    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 0,
      opacity: 0,
      active: false,
    };

    let lastShootingStarTime = Date.now();

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-seed stars primarily in top 65% of screen (deep space)
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.65), // upper deep space
          size: Math.random() * 1.5 + 0.5,
          baseAlpha: Math.random() * 0.6 + 0.25,
          twinkleSpeed: Math.random() * 0.03 + 0.012,
          twinklePhase: Math.random() * Math.PI * 2,
          isCyan: Math.random() > 0.8, // 20% faint cyan
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const triggerShootingStar = () => {
      shootingStar.x = Math.random() * (width * 0.8) + width * 0.1;
      shootingStar.y = Math.random() * (height * 0.3) + 20;
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // ~45 deg downward slope
      const speed = Math.random() * 6 + 7;
      shootingStar.vx = Math.cos(angle) * speed;
      shootingStar.vy = Math.sin(angle) * speed;
      shootingStar.length = Math.random() * 85 + 75;
      shootingStar.opacity = 1;
      shootingStar.active = true;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Trigger shooting star every 7 to 12 seconds
      if (!shootingStar.active && now - lastShootingStarTime > 8000) {
        if (Math.random() < 0.02) {
          triggerShootingStar();
          lastShootingStarTime = now;
        }
      }

      // Render Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinklePhase += s.twinkleSpeed;
        const currentAlpha = s.baseAlpha + Math.sin(s.twinklePhase) * 0.28;
        const alpha = Math.max(0.12, Math.min(1, currentAlpha));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        if (s.isCyan) {
          ctx.fillStyle = `rgba(0, 196, 212, ${alpha})`;
          ctx.shadowColor = 'rgba(0, 196, 212, 0.6)';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(240, 244, 255, ${alpha})`;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
          ctx.shadowBlur = 2;
        }
        ctx.fill();
      }

      // Reset shadow for performance
      ctx.shadowBlur = 0;

      // Render Shooting Star if active
      if (shootingStar.active) {
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.opacity -= 0.016;

        if (shootingStar.opacity <= 0 || shootingStar.y > height * 0.7) {
          shootingStar.active = false;
        } else {
          const grad = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            shootingStar.x - shootingStar.vx * (shootingStar.length / 10),
            shootingStar.y - shootingStar.vy * (shootingStar.length / 10)
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          grad.addColorStop(0.3, `rgba(0, 196, 212, ${shootingStar.opacity * 0.85})`);
          grad.addColorStop(1, 'rgba(0, 196, 212, 0)');

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - shootingStar.vx * (shootingStar.length / 10),
            shootingStar.y - shootingStar.vy * (shootingStar.length / 10)
          );
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black"
      aria-hidden="true"
    >
      {/* 1. Photorealistic Satellite View of Earth Horizon with Continuous Orbital Motion & Parallax */}
      <div
        className="absolute inset-0 w-full h-full will-change-transform transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {/* Layer A: Base Satellite Ocean & Continent View with Continuous Low-Earth Orbital Pass */}
        <div className="w-full h-full animate-orbital-flyover">
          <img
            src="/hero-earth.jpg"
            alt="Photorealistic Satellite View of Earth Horizon"
            className="w-full h-full object-cover object-[center_32%] lg:object-[center_28%]"
          />
        </div>

        {/* Layer B: Swirling Atmospheric & Cloud Gliding Layer (True 3D Optical Parallax) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-35 contrast-125 brightness-110 animate-atmospheric-drift">
          <img
            src="/hero-earth.jpg"
            alt=""
            className="w-full h-full object-cover object-[center_32%] lg:object-[center_28%]"
          />
        </div>
      </div>

      {/* 2. Twinkling Stars & Shooting Star Canvas Layer in Deep Space */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-90"
      />

      {/* 3. Passing Low-Earth Orbit Satellite with Solar Arrays & Navigational Strobe Beacon */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-[18%] left-0 animate-satellite-pass flex items-center gap-2">
          {/* Satellite Chassis & Solar Panels */}
          <div className="relative flex items-center shadow-lg">
            {/* Left Solar Panel */}
            <div className="w-6 h-3 bg-gradient-to-r from-blue-950 via-cyan-950 to-blue-900 border border-cyan-400/60 rounded-[2px] grid grid-cols-2 gap-0.5 p-0.5 shadow-sm">
              <div className="bg-cyan-500/25 rounded-[1px]" />
              <div className="bg-cyan-500/25 rounded-[1px]" />
            </div>
            {/* Center Satellite Body & Gold Foil Shield */}
            <div className="relative w-4 h-4 mx-0.5 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rounded-[2px] border border-amber-300 shadow-md flex items-center justify-center">
              {/* High-Intensity Strobe Beacon LED */}
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-satellite-strobe" />
            </div>
            {/* Right Solar Panel */}
            <div className="w-6 h-3 bg-gradient-to-r from-blue-900 via-cyan-950 to-blue-950 border border-cyan-400/60 rounded-[2px] grid grid-cols-2 gap-0.5 p-0.5 shadow-sm">
              <div className="bg-cyan-500/25 rounded-[1px]" />
              <div className="bg-cyan-500/25 rounded-[1px]" />
            </div>
          </div>
          {/* Micro Telemetry Callout Pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/70 border border-cyan-500/40 text-[9px] font-mono text-cyan-300 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>NGT-SAT-1 // LEO</span>
          </div>
        </div>
      </div>

      {/* 4. Deep Space Top Vignette so Navbar and Headline are 100% Crisp & Legible */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />

      {/* 5. Atmospheric Rayleigh Ionization & Aurora Limb Shimmer */}
      <div className="absolute inset-x-0 bottom-[22%] h-72 z-10 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cyan-accent/25 via-cyan-bright/15 to-transparent blur-3xl animate-atmosphere-pulse" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-[85vw] max-w-6xl h-36 bg-cyan-400/15 blur-[90px] rounded-[100%] pointer-events-none" />
      </div>

      {/* 6. Live Satellite Telemetry HUD Badge */}
      <div className="absolute top-28 right-4 sm:right-8 z-20 hidden md:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/60 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-silver-300 shadow-xl pointer-events-auto hover:border-cyan-400/60 transition-colors">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
          </span>
          <span className="text-cyan-accent font-semibold tracking-wider">LIVE SATELLITE FEED</span>
        </div>
        <span className="text-white/20">|</span>
        <span className="text-silver-400">ALT: <span className="text-white font-medium">{telemetry.alt} KM</span></span>
        <span className="text-white/20">|</span>
        <span className="text-silver-400">VEL: <span className="text-white font-medium">{telemetry.vel} KM/S</span></span>
        <span className="text-white/20">|</span>
        <span className="text-silver-400">POS: <span className="text-cyan-300 font-medium">{telemetry.lat}, {telemetry.lon}</span></span>
      </div>

      {/* 7. Smooth Bottom Fade into light or dark surface for seamless continuation */}
      <div className="absolute inset-x-0 bottom-0 h-44 z-20 bg-gradient-to-t from-slate-50 dark:from-dark-950 via-slate-50/70 dark:via-dark-950/85 to-transparent pointer-events-none transition-colors duration-300" />
    </div>
  );
};
