const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center w-full bg-black">
      <div className="w-[80%] pt-30">
        <h1 className="text-white text-4xl text-shadow-white font-bold mb-3">
          About Me
        </h1>
        <hr className="border-white" />
        <p className="text-gray-400 text-lg leading-relaxed mt-6">
          I am a CSE student and a full-stack developer with strong skills in AI
          and ML, focused on building smart, efficient, and user-centered
          digital solutions. I have consistently maintained strong academic
          performance, scoring above 90% from Class 10 onwards, reflecting my
          dedication and discipline. Serving as the Web Development Lead for the
          OWASP club helped me develop a strong understanding of teamwork,
          collaboration, and real-world project execution by working closely
          with teams to select practical problems from the college curriculum
          and solve them with the best possible approach. This experience
          strengthened my leadership, communication, and problem-solving skills,
          while I continue improving my DSA knowledge to build meaningful,
          scalable, and impactful technology.
        </p>
      </div>
      <div className="mx-auto py-14 w-[80%]">
        <div className="overflow-x-auto border border-neutral-300 rounded-xl bg-white">
          <table className="w-full border-collapse">
            {/* Header */}
            <thead>
              <tr className="border-b border-neutral-300 text-neutral-800">
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide w-[33%]">
                  Institution
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide w-[33%]">
                  Program
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide w-[15%]">
                  Score
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide w-[25%]">
                  Duration
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-200">
                <td className="px-6 py-5 font-medium text-neutral-900">
                  Kalasalingam Academy of Research and Education
                </td>
                <td className="px-6 py-5">
                  C.S.E – Artificial Intelligence & Machine Learning
                </td>
                <td className="px-6 py-5 font-semibold text-neutral-900">
                  CGPA 9.22
                </td>
                <td className="px-6 py-5 text-neutral-600">
                  Sep 2022 – May 2026
                </td>
              </tr>

              <tr className="border-b border-neutral-200">
                <td className="px-6 py-5 font-medium text-neutral-900">
                  Narayana Junior College
                </td>
                <td className="px-6 py-5">Intermediate – MPC</td>
                <td className="px-6 py-5 font-semibold text-neutral-900">
                  90.4%
                </td>
                <td className="px-6 py-5 text-neutral-600">
                  Jul 2020 – Apr 2022
                </td>
              </tr>

              <tr>
                <td className="px-6 py-5 font-medium text-neutral-900">
                  Sri Netaji MSR Pilot High School
                </td>
                <td className="px-6 py-5">10th Class</td>
                <td className="px-6 py-5 font-semibold text-neutral-900">
                  99.67%
                </td>
                <td className="px-6 py-5 text-neutral-600">
                  Jun 2019 – Mar 2020
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;
