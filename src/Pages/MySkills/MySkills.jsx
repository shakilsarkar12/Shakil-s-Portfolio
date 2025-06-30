import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const MySkills = () => {
    const icons1 = [
        <FaHtml5 />,
        <FaGithub />,
      <SiExpress />,
      <SiMongodb />,
      <SiFirebase />,
      <SiVercel />,
      <FaCss3Alt />,
      <SiTailwindcss />,
      <FaJs />,
      <FaReact />,
      <SiNetlify />,
      <FaNodeJs />,
    ];
    const icons2 = [
        <SiExpress />,
        <SiMongodb />,
        <SiFirebase />,
        <FaGithub />,
        <SiVercel />,
        <SiNetlify />,
        <SiExpress />,
        <SiMongodb />,
        <SiFirebase />,
        <FaGithub />,
        <SiVercel />,
        <FaHtml5 />,
    <SiNetlify />,
  ];

  return (
    <section className="max-w-5xl mx-auto min-h-[50vh] flex flex-col items-center justify-center py-16 bg-[#0F172A] text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
        My Skills
      </h2>

      {/* Row 1 */}
      <Marquee speed={30} gradient={false} autoFill={true}>
        {icons1.map((icon, i) => (
          <div
            key={i}
            className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 mx-4 md:mx-6"
          >
            {icon}
          </div>
        ))}
      </Marquee>

      {/* Row 2 */}
      <Marquee
        speed={30}
        gradient={false}
        direction="right"
        autoFill={true}
        className="mt-8 "
      >
        {icons2.map((icon, i) => (
          <div
            key={i}
            className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 mx-4 md:mx-6"
          >
            {icon}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MySkills;
