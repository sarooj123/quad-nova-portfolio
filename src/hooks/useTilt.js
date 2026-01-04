import { useEffect } from "react";

/**
 * Adds lightweight 3D tilt effect on elements with [data-tilt]
 * No library. Works on desktop, auto-disables for touch devices.
 */
export default function useTilt() {
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouch) return;

    const els = Array.from(document.querySelectorAll("[data-tilt]"));

    function onMove(e) {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const px = (x / r.width) - 0.5;
      const py = (y / r.height) - 0.5;

      const rx = (-py * 10).toFixed(2);
      const ry = (px * 12).toFixed(2);

      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
      el.style.borderColor = "rgba(255,255,255,.18)";
    }

    function onLeave(e) {
      const el = e.currentTarget;
      el.style.transform = "";
      el.style.borderColor = "";
    }

    els.forEach((el) => {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}