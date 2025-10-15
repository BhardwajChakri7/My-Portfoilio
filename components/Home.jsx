import { BackgroundRippleEffect } from "./ui-components/BackgroundRippleEffect";
import ParticlesComponent from "./ui-components/ParticlesBg";
import { ProfileWithLensEffect } from "./ProfileWithLensEffect";
import { HoverBorderGradient } from "./ui-components/HoverBorderGradient";
import { TextGenerateEffect } from "./ui-components/TextGenerateEffect";
import RotatingText from "./ui-components/RotatingRoles";
export function Home() {
  return (
    <main className="scroll-container">
      {/* ===== Hero Section ===== */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black snap-start">
        {/* Background Ripple Effect */}
        <div className="fade-ripple absolute inset-0">
          {/* <BackgroundRippleEffect /> */}
          <ParticlesComponent />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 w-4/5 mx-auto px-6 md:px-20 mt-20">
          {/* Left: Text */}
          <div className="max-w-xl text-center md:text-left">
            <h2
              className="text-4xl md:text-6xl font-bold leading-tight mb-2 
              bg-gradient-to-t from-white to-gray-600 text-transparent bg-clip-text">
              Hi there<span className="inline-block">⚡</span>
            </h2>
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-t from-white to-gray-600 text-transparent bg-clip-text mb-5 text-nowrap">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
                Ganipineni Bhardwaj Naidu
              </span>
            </h1>

            <RotatingText
              texts={[
                "Full Stack Devolopment",
                "Python Programing",
                "C++ Programing",
              ]}
              // staggerFrom={"first"}
              initial={{ y: "-150%" }}
              animate={{ y: "-6%" }}
              exit={{ y: "150%" }}
              // staggerDuration={0.04}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "tween", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-5 mt-4">
              I’m a MERN Stack Developer who loves turning ideas into web apps
              that are both functional and visually engaging.Lately, I’ve been
              diving into DSA to sharpen my problem-solving skills and tackle
              challenges with clarity and precision.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 social-icons">
              {/* Twitter/X Icon with Wing Animation */}
              <div className="social-icons">
                <a
                  href="https://github.com/BhardwajChakri7"
                  className="social-icon github"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.802 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.731.084-.68.084-.68 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.652 1.652.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.879 24 17.379 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ganipineni-bhardwaj-naidu-5961a7376/"
                  className="social-icon linkedin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bhardwaj_chakri/"
                  className="social-icon instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403a4.92 4.92 0 011.675 1.086 4.92 4.92 0 011.086 1.675c.163.459.347 1.259.403 2.428.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a4.92 4.92 0 01-1.086 1.675 4.92 4.92 0 01-1.675 1.086c-.459.163-1.259.347-2.428.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a4.902 4.902 0 01-1.675-1.086 4.902 4.902 0 01-1.086-1.675c-.163-.459-.347-1.259-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428a4.902 4.902 0 011.086-1.675 4.902 4.902 0 011.675-1.086c.459-.163 1.259-.347 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.671.319 3.758.665a7.07 7.07 0 00-2.545 1.66A7.07 7.07 0 00.665 4.87C.319 5.783.131 6.882.072 8.164.013 9.444 0 9.853 0 12s.013 2.556.072 3.836c.059 1.282.247 2.381.593 3.294a7.07 7.07 0 001.66 2.545 7.07 7.07 0 002.545 1.66c.913.346 2.012.534 3.294.593 1.28.059 1.689.072 3.836.072s2.556-.013 3.836-.072c1.282-.059 2.381-.247 3.294-.593a7.07 7.07 0 002.545-1.66 7.07 7.07 0 001.66-2.545c.346-.913.534-2.012.593-3.294.059-1.28.072-1.689.072-3.836s-.013-2.556-.072-3.836c-.059-1.282-.247-2.381-.593-3.294a7.07 7.07 0 00-1.66-2.545 7.07 7.07 0 00-2.545-1.66c-.913-.346-2.012-.534-3.294-.593C14.556.013 14.147 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 resume-download-button"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/files/my_resume.pdf"; // 🔹 Path to your PDF (keep file inside /public/files/)
                    link.download = "Bhardwaj_Resume.pdf"; // 🔹 File name when downloaded
                    link.click();
                  }}>
                  <span>Download Resume</span>
                </HoverBorderGradient>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative mb-10 md:mb-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-[0_0_60px_-10px_#ffffff]">
              <ProfileWithLensEffect />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Next Section Example ===== */}
      <section
        id="projects"
        className="min-h-screen w-full flex items-center justify-center bg-neutral-900 text-white snap-start">
        <TextGenerateEffect
          words="Oxygen gets you high. In a catastrophic emergency, we're
        taking giant, panicked breaths. Suddenly you become euphoric, docile.
        You accept your fate. It's all right here. Emergency water landing, six
        hundred miles an hour. Blank faces, calm as Hindu cows "
        />
      </section>

      <section
        id="projects"
        className="min-h-screen w-full flex items-center justify-center bg-neutral-900 text-white snap-start">
        <h2 className="text-4xl font-bold">My Projects</h2>
      </section>

      <section
        id="projects"
        className="min-h-screen w-full flex items-center justify-center bg-neutral-900 text-white snap-start">
        <h2 className="text-4xl font-bold">My Projects</h2>
      </section>
    </main>
  );
}

export default Home;
