"use client";

import { useEffect, useRef } from "react";

type SiriusOrbApi = {
  start: () => void;
  stop: () => void;
  resize: () => void;
};

declare global {
  interface Window {
    THREE?: unknown;
    SiriusOrb?: SiriusOrbApi;
  }
}

let scriptsReady: Promise<void> | null = null;

function ensureOrbScripts(): Promise<void> {
  if (!scriptsReady) {
    scriptsReady = (async () => {
      await loadScript("/vendor/three.min.js");
      if (!window.SiriusOrb) {
        await loadScript("/orb.js");
      }
    })();
  }
  return scriptsReady;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-sirius-src="${src}"]`,
    );
    if (existing) {
      if (existing.dataset.loaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true },
      );
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.siriusSrc = src;
    script.onload = () => {
      script.dataset.loaded = "1";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

type Props = {
  className?: string;
};

/** Exact Three.js orb from lumni-sirius-app (`web/orb.js` + `vendor/three.min.js`). */
export function SiriusOrb({ className = "" }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    let io: IntersectionObserver | null = null;
    let resizeTimer = 0;
    let visible = true;

    const boot = async () => {
      await ensureOrbScripts();
      if (cancelled || !window.SiriusOrb) return;

      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      if (cancelled) return;

      window.SiriusOrb.start();
      window.SiriusOrb.resize();

      const stage = stageRef.current;
      if (!stage) return;

      const scheduleResize = () => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          window.SiriusOrb?.resize();
        }, 80);
      };

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(scheduleResize);
        resizeObserver.observe(stage);
      }

      if (typeof IntersectionObserver !== "undefined") {
        io = new IntersectionObserver(
          ([entry]) => {
            const next = !!entry?.isIntersecting;
            if (next === visible) return;
            visible = next;
            if (next) {
              window.SiriusOrb?.start();
              window.SiriusOrb?.resize();
            } else {
              window.SiriusOrb?.stop();
            }
          },
          { rootMargin: "80px", threshold: 0.05 },
        );
        io.observe(stage);
      }
    };

    void boot();

    return () => {
      cancelled = true;
      window.clearTimeout(resizeTimer);
      resizeObserver?.disconnect();
      io?.disconnect();
    };
  }, []);

  return (
    <div
      ref={stageRef}
      id="stage"
      className={`sirius-orb-stage ${className}`.trim()}
    >
      <canvas id="orb-canvas" />
    </div>
  );
}
