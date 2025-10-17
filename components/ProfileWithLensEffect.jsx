"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lens } from "./ui-components/Lens"; // Your powerful Lens component

/**
 * Renders a circular profile image with a magnifying lens effect on hover,
 * using the custom Lens component to handle the magnification.
 */

export function ProfileWithLensEffect() {
  // This state will be shared between the background and the Lens component
  // to synchronize the blur and the lens appearing/disappearing.
  const [isHovering, setIsHovering] = useState(false);

  const sizeClasses = "w-56 h-56 md:w-72 md:h-72";
  const imageSrc = "/files/my_photo.jpg";

  return (
    <div
      className={`relative rounded-full overflow-hidden ${sizeClasses} flex items-center justify-center`}>
      {/* Layer 1: The Blurred Background Image */}
      <motion.img
        src={imageSrc}
        alt="Profile Picture Background"
        width={500}
        height={500}
        className="absolute inset-0 object-cover w-full h-full"
        animate={{
          filter: isHovering ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Layer 2: Your Lens Component on Top */}
      <div className="absolute inset-0 w-full h-full">
        <Lens
          hovering={isHovering}
          setHovering={setIsHovering}
          zoomFactor={1.5}
          lensSize={120}>
          {/* The Lens component needs the clear image as its child */}
          <img
            src={imageSrc}
            alt="Profile Picture"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </Lens>
      </div>
    </div>
  );
}
