"use client";

import { useEffect } from "react";

/** Keep first paint at the real top — orb overscan + browser scroll restoration were leaving mid-page. */
export function EnsureScrollTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch (_) {
      /* ignore */
    }

    const hash = window.location.hash;
    const stay =
      hash &&
      hash !== "#" &&
      hash !== "#top" &&
      !!document.getElementById(hash.slice(1));

    if (stay) return;

    const toTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    toTop();
    const raf = requestAnimationFrame(toTop);
    const t1 = window.setTimeout(toTop, 0);
    const t2 = window.setTimeout(toTop, 120);

    if (hash === "#" || hash === "#top") {
      const { pathname, search } = window.location;
      window.history.replaceState(null, "", `${pathname}${search}`);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return null;
}
