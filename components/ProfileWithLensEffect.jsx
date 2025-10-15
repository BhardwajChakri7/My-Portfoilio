"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// Assuming this component handles the actual mouse position tracking
import { Lens } from "./ui-components/Lens";

/**
 * Renders a circular profile image that zooms and blurs on hover,
 * leveraging the external 'Lens' component for hover detection.
 */
export function ProfileWithLensEffect() {
  const [hovering, setHovering] = useState(false);

  // Define the common size classes for clarity
  const sizeClasses = "w-56 h-56 md:w-72 md:h-72";

  return (
    <div className="relative">
      {/* 1. Main Container: Establishes the circular shape and size.
            - Ensures anything exceeding the circle is clipped (overflow-hidden).
        */}
      <div
        className={`relative rounded-full overflow-hidden
                        ${sizeClasses}
                        flex items-center justify-center`}>
        {/* 2. Inner Wrapper: This ensures the Lens component's interactive area
                perfectly matches the circular container, providing the correct boundaries.
            */}
        <div
          className="relative z-10 w-full h-full
                        rounded-full overflow-hidden">
          {/* 3. Lens Component: Manages the mouse events and sets the 'hovering' state.
                The children (the image) are the content that reacts to the state.
            */}
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              // 🚨 REMINDER: Update the 'src' path to your actual image location
              src="/files/my_photo.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              // Tailwind classes to ensure the image fills the circle
              className="object-cover w-full h-full rounded-full"
              // framer-motion props
              animate={{
                // Subtle zoom for magnification effect
                scale: hovering ? 1.05 : 1, // Increased scale from 1.05 to 1.1 for a clearer zoom
                // Blur effect for the image outside the lens (if Lens handles that part)
                filter: hovering ? "blur(0px)" : "blur(0px)", // Increased blur to 3px for more visual impact
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Added ease for smoother effect
            />
          </Lens>
        </div>
      </div>
    </div>
  );
}
