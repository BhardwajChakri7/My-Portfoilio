// src/components/About.jsx

import React from "react";
import Home from "./Home";

export function About() {
  return (
    // The ID must match the href in your Navbar (href="#about")
    <section
      id="about"
      className="scroll-container relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-900 snap-start">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          This is where you can write a paragraph about yourself, your passion
          for development, and your journey into the tech world.
        </p>
      </div>
    </section>
  );
}
export default About;
