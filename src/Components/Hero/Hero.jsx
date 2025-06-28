import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroImage from "./HeroImage";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between w-full bg-[#0F172A] text-white overflow-hidden">
      {/* Left Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold md:font-bold"
        >
          Hi, I’m <span className="text-cyan-400">Shakil Sarkar</span>
        </motion.h1>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Web Developer",
              2000,
              "Full Stack Web Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-2xl text-cyan-300 font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl"
        >
          I build modern, secure, and dynamic websites using React, Node,
          MongoDB & Tailwind.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-x-2 sm:space-x-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm md:text-base font-medium md:font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
          >
            View Projects <FaArrowRight />
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm md:text-base font-medium md:font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
          >
            Download  CV <FaArrowDown />
          </Link>
        </motion.div>
      </div>

      {/* Right Image with Animated Borders */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="flex-1 mt-10 md:mt-0 flex justify-center relative"
      >
        <div className="flex-1 flex md:justify-end mt-10 md:mt-0">
          <HeroImage />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
