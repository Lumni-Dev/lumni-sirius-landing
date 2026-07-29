"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  phase: number;
  speed: number;
  twinkle: number;
  cool: boolean;
};

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let last = performance.now();
    const drift = { x: 0, y: 0, vx: 0.1, vy: 0.06 };

    const spawn = (depth: number, x: number, y: number): Star => ({
      x,
      y,
      z: depth,
      r: 0.2 + depth * 0.5 + Math.random() * (depth > 0.7 ? 0.3 : 0.15),
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * (1.1 + depth),
      twinkle: 0.35 + Math.random() * 0.45,
      cool: Math.random() < 0.3,
    });

    const place = (
      count: number,
      zMin: number,
      zMax: number,
      minDist: number,
      placed: Star[],
    ) => {
      const out: Star[] = [];
      let tries = 0;
      while (out.length < count && tries < count * 40) {
        tries += 1;
        const x = Math.random();
        const y = Math.random();
        const tooClose = placed.some((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          const allow = minDist * (0.55 + Math.min(p.z, (zMin + zMax) / 2) * 0.7);
          return dx * dx + dy * dy < allow * allow;
        });
        if (tooClose) continue;
        const star = spawn(zMin + Math.random() * (zMax - zMin), x, y);
        out.push(star);
        placed.push(star);
      }
      return out;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const area = w * h;
      const density = reduced ? 1.8 : 1;
      const placed: Star[] = [];
      stars = [
        ...place(Math.max(12, Math.floor(area / (32000 * density))), 0.06, 0.28, 0.05, placed),
        ...place(Math.max(8, Math.floor(area / (48000 * density))), 0.28, 0.5, 0.07, placed),
        ...place(Math.max(5, Math.floor(area / (70000 * density))), 0.5, 0.72, 0.09, placed),
        ...place(Math.max(3, Math.floor(area / (120000 * density))), 0.72, 1, 0.12, placed),
      ];
    };

    const frame = (now: number) => {
      if (!running) return;
      if (document.hidden) {
        raf = 0;
        return;
      }
      // ~30fps is enough for ambient drift
      if (now - last < 32) {
        raf = requestAnimationFrame(frame);
        return;
      }
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduced) {
        drift.x += drift.vx * dt;
        drift.y += drift.vy * dt;
      }
      ctx.clearRect(0, 0, w, h);

      for (const st of stars) {
        const x = ((st.x + drift.x * (0.04 + st.z * 0.08)) % 1 + 1) % 1;
        const y = ((st.y + drift.y * (0.03 + st.z * 0.06)) % 1 + 1) % 1;
        const wave = 0.5 + 0.5 * Math.sin(now * 0.001 * st.speed + st.phase);
        const breath = 1 - st.twinkle + st.twinkle * wave;
        const alpha = (0.25 + st.z * 0.7) * breath;
        const r = st.r * (0.85 + st.z * 0.45);
        ctx.fillStyle = st.cool
          ? `rgba(190, 205, 255, ${alpha})`
          : `rgba(245, 246, 250, ${alpha})`;
        if (r < 0.7) {
          ctx.fillRect(x * w, y * h, r * 1.6, r * 1.6);
        } else {
          ctx.beginPath();
          ctx.arc(x * w, y * h, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(frame);
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 120);
    };
    const onVisibility = () => {
      if (!document.hidden && running && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
