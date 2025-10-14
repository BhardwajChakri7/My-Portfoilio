// tailwind.config.js

module.exports = {
  // ...
  theme: {
    extend: {
      // 1. Keep the custom, smooth easing curve
      transitionTimingFunction: {
        "smooth-settle": "cubic-bezier(0.25, 1, 0.5, 1.15)",
      },

      // 2. Define the keyframes for the "Upward Scroll"
      keyframes: {
        "upward-scroll-fade": {
          // New word starts far below and invisible (150% ensures it starts off-screen)
          "0%": { transform: "translateY(150%)", opacity: "0" },
          // It moves up to the center (stable position) and becomes visible
          "50%": { transform: "translateY(0)", opacity: "1" },
          // It continues to move slightly upwards (to -20%) and fades slightly
          "80%": { transform: "translateY(-20%)", opacity: "0.2" },
          // It finishes moving up and out (to -150%)
          "100%": { transform: "translateY(-150%)", opacity: "0" },
        },
      },

      // 3. Define the animation utility class (Use a new, clear name)
      animation: {
        "upward-scroll-fade":
          'upward-scroll-fade var(--animation-duration, 1200ms) theme("transitionTimingFunction.smooth-settle") forwards',
      },
    },
  },
  // ...
};
