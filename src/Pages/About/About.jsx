import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/image1.png"

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10  sm:p-2 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left Image */}
      <motion.div
        className="w-fit flex items-center justify-center lg:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={profileImg}
          alt="Shakil"
          className="sm:min-w-sm h-96 rounded-full overflow-hidden border-4 border-cyan-400 object-cover"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300  md:leading-8 mb-6">
          Hi, I'm{" "}
          <span className="text-cyan-400 font-semibold">Shakil Sarkar</span>, a
          passionate and dedicated Full Stack Web Developer from Bangladesh. I
          specialize in creating dynamic, responsive, and secure websites and
          web applications using the{" "}
          <span className="font-semibold">MERN stack</span>. From designing
          clean user interfaces to building efficient backend APIs — I enjoy
          every part of the development process.
          <br />
          <br />
          Over the past few years, I’ve built several full-fledged projects that
          involve authentication systems, payment integrations, real-time
          features, and secure JWT-protected APIs. I love working with modern
          technologies like{" "}
          <span className="font-semibold">
            React.js, Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS
          </span>{" "}
          to craft seamless and interactive web experiences.
          <br />
          <br />
          I’m always eager to learn new tools and frameworks, explore advanced
          JavaScript techniques, and stay updated with the latest trends in web
          development. When I’m not coding, I enjoy writing tech articles,
          sharing knowledge, and contributing to open-source projects. My goal
          is to become a professional software engineer and build impactful
          digital solutions for real-world problems.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
