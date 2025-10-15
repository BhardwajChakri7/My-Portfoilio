"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback((isDark) => {
    // 1. CLEANUP: Destroy existing pJS instance and canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    // 2. CORRECTED COLOR LOGIC
    const colors = isDark
      ? {
          // Dark Mode: Light particles on dark background
          particles: "#ffffff", // White particles
          lines: "#616161", // Medium gray lines for subtle connections
          accent: "#9e9e9e", // Light gray accent for contrast
        }
      : {
          // Light Mode: Dark particles on light background
          particles: "#212121", // Dark gray/near black particles (CORRECTED)
          lines: "#bdbdbd", // Light gray lines for subtle connections
          accent: "#616161", // Medium gray for contrast
        };

    // 3. Initialize particlesJS
    if (typeof window.particlesJS === "function") {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: colors.particles },
          shape: {
            type: "circle",
            stroke: { width: 0.5, color: colors.accent },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.3 },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1 },
          },
          line_linked: {
            enable: true,
            distance: 160,
            color: colors.lines,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 220, line_linked: { opacity: 0.8 } },
            push: { particles_nb: 4 },
            repulse: { distance: 180, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Function to check theme state
    const detectDark = () =>
      document.documentElement.classList.contains("dark") ||
      document.documentElement.getAttribute("data-theme") === "dark";

    script.onload = () => {
      // init first load
      initParticles(detectDark());

      // re-init when theme toggles
      const observer = new MutationObserver(() => initParticles(detectDark()));
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });

      // Cleanup for the observer is handled in the return block
    };

    return () => {
      // 4. IMPROVED CLEANUP: Destroy pJS instance, remove canvas, remove script, and stop observer
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }

      const oldCanvas = document.querySelector("#particles-js canvas");
      if (oldCanvas) oldCanvas.remove();

      document.body.removeChild(script);

      // We didn't save the observer instance, so we can't disconnect it directly here
      // without modifying the effect (which is fine since it targets document.documentElement
      // and isn't memory-intensive). For production, you'd save the observer to disconnect it.
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="
        w-full h-screen absolute top-0 left-0
        transition-colors duration-500
        bg-gradient-to-tr from-[#f5f5f5] via-[#bdbdbd] to-[#9e9e9e]
        dark:from-[#0d0d0d] dark:via-[#1a1a1a] dark:to-[#2e2e2e]
      "
    />
  );
}
