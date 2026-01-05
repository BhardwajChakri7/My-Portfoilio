// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const sectionRef = useRef(null);
//   const aboutBlockRef = useRef(null);
//   const headingRef = useRef(null);
//   const textRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       /* ===============================
//          MASTER TIMELINE (PINNED)
//       =============================== */
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=220%",
//           scrub: 1.2,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       /* Background depth */
//       tl.from(sectionRef.current, {
//         backgroundPosition: "50% 0%",
//         ease: "none",
//       });

//       /* Heading reveal */
//       tl.from(
//         headingRef.current,
//         {
//           y: 80,
//           opacity: 0,
//           ease: "power3.out",
//         },
//         0
//       );

//       /* About text reveal */
//       tl.from(
//         textRef.current,
//         {
//           y: 60,
//           opacity: 0,
//           ease: "power2.out",
//         },
//         0.15
//       );

//       /* Slight zoom out of about block */
//       tl.fromTo(
//         aboutBlockRef.current,
//         { scale: 1.05 },
//         { scale: 1, ease: "power2.out" },
//         0
//       );

//       /* Cards cinematic entrance */
//       tl.from(
//         cardsRef.current,
//         {
//           y: 120,
//           opacity: 0,
//           scale: 0.92,
//           transformOrigin: "center center",
//           stagger: 0.18,
//           ease: "power4.out",
//         },
//         0.6
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="relative w-full bg-black text-white overflow-hidden">
//       {/* SUBTLE GRID */}
//       <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

//       {/* ABOUT */}
//       <div ref={aboutBlockRef} className="relative mx-auto w-[80%] pt-36 pb-24">
//         <div className="max-w-6xl space-y-12">
//           <div ref={headingRef}>
//             <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
//             <div className="mt-4 h-[3px] w-24 bg-white" />
//           </div>

//           <div ref={textRef} className="pl-6 border-l-2 border-white/30">
//             <p className="text-gray-300 text-lg leading-relaxed">
//               I am a CSE student and a full-stack developer with strong skills
//               in AI and ML, focused on building smart, efficient, and
//               user-centered digital solutions. I have consistently maintained
//               strong academic performance, scoring above 90% from Class 10
//               onwards, reflecting my dedication and discipline. Serving as the
//               Web Development Lead for the OWASP club helped me develop a strong
//               understanding of teamwork, collaboration, and real-world project
//               execution by working closely with teams to select practical
//               problems from the college curriculum and solve them with the best
//               possible approach. This experience strengthened my leadership,
//               communication, and problem-solving skills, while I continue
//               improving my DSA knowledge to build meaningful, scalable, and
//               impactful technology.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* EDUCATION */}
//       <div className="relative mx-auto w-[80%] pb-36">
//         <h2 className="text-3xl font-semibold mb-12">Education</h2>

//         <div className="grid gap-8">
//           {[
//             {
//               school: "Kalasalingam Academy of Research and Education",
//               program: "C.S.E – Artificial Intelligence & Machine Learning",
//               score: "9.22 CGPA",
//               duration: "Sep 2022 – May 2026",
//             },
//             {
//               school: "Narayana Junior College",
//               program: "Intermediate – MPC",
//               score: "90.4%",
//               duration: "Jul 2020 – Apr 2022",
//             },
//             {
//               school: "Sri Netaji MSR Pilot High School",
//               program: "10th Class",
//               score: "99.67%",
//               duration: "Jun 2019 – Mar 2020",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               ref={(el) => (cardsRef.current[i] = el)}
//               className="rounded-2xl border border-white/15 bg-white text-black p-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]">
//               <div className="flex justify-between gap-6">
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.school}</h3>
//                   <p className="mt-2 text-gray-600">{item.program}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-lg font-bold">{item.score}</p>
//                   <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const gifRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
       ABOUT SECTION
    ========================= */

      gsap.from(gifRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // 🔥 30% visible
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -80,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 1.1,
        ease: "power2.out",
        delay: 0.25,
      });

      /* =========================
       EDUCATION CARDS
    ========================= */

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%", // 🔥 correct trigger
          end:"top 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        scale: 0.95,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* ANIMATED GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* RADIAL GRADIENT GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-24">
        {/* TOP SECTION: GIF + TEXT */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          {/* GIF CONTAINER */}
          <div ref={gifRef} className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="/your-gif-path.gif" // REPLACCE THIS WITH YOUR GIF URL
                alt="About Animation"
                className="relative rounded-2xl w-full max-w-[300px] border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div className="w-full md:w-2/3">
            <div ref={headingRef} className="mb-8">
              <h1 className="text-6xl font-bold tracking-tight mt-2">
                About Me
              </h1>
              <div className="mt-4 h-[2px] w-20 bg-blue-600" />
            </div>

            <div ref={textRef} className="space-y-6">
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                I am a{" "}
                <span className="text-white font-medium">
                  CSE student and full-stack developer
                </span>{" "}
                specialized in AI/ML. I focus on building digital solutions that
                aren't just functional, but intelligent.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                With a consistent academic record of{" "}
                <span className="text-blue-400">90%+</span> and leadership
                experience as the Web Dev Lead at OWASP, I thrive in
                environments that challenge my technical and collaborative
                boundaries.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="pb-24">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            Education
          </h2>

          <div className="grid gap-6">
            {[
              {
                school: "Kalasalingam Academy of Research and Education",
                program: "C.S.E – Artificial Intelligence & Machine Learning",
                score: "9.22 CGPA",
                duration: "2022 – 2026",
              },
              {
                school: "Narayana Junior College",
                program: "Intermediate – MPC",
                score: "90.4%",
                duration: "2020 – 2022",
              },
              {
                school: "Sri Netaji MSR Pilot High School",
                program: "10th Class",
                score: "99.67%",
                duration: "2019 – 2020",
              }
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative rounded-2xl border border-white/5 bg-white/5 p-1 hover:bg-white/10 transition-colors duration-500">
                <div className="bg-[#0a0a0a] rounded-[14px] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                      {item.school}
                    </h3>
                    <p className="text-gray-500 mt-1">{item.program}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20">
                      {item.score}
                    </span>
                    <p className="text-xs text-gray-600 mt-2 uppercase tracking-widest">
                      {item.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
