import React from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import yourLogo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0F172A] text-white py-4 flex justify-between items-center w-full z-50 sticky top-0"
    >
      {/* Logo */}
      <Link
        to="hero"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="text-cyan-400"
        className="cursor-pointer"
      >
        <img src={yourLogo} alt="Logo" className="w-32 md:w-40" />
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center  gap-10 text-lg font-medium">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-cyan-400"
          className="hover:text-cyan-400 duration-300 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-cyan-400"
          className="hover:text-cyan-400 duration-300 cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-cyan-400"
          className="hover:text-cyan-400 duration-300 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-cyan-400"
          className="hover:text-cyan-400 duration-300 cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className=" flex items-center justify-center gap-4">
        <a
          href="/resume.pdf"
          download
          className="bg-cyan-400 text-black text-sm md:text-base font-medium md:font-semibold px-3 md:px-5 py-1.5 md:py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
        >
          Resume
        </a>
        <button
          onClick={handleMenuToggle}
          className="md:hidden flex items-center justify-center"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-[#0F172A] border border-cyan-400 rounded-md shadow-md flex flex-col p-4 space-y-4 md:hidden z-50">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            className="hover:text-cyan-400 duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            className="hover:text-cyan-400 duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            className="hover:text-cyan-400 duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            className="hover:text-cyan-400 duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
