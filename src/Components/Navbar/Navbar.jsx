import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-[#0F172A]/70 backdrop-blur-lg text-white py-4 flex justify-between items-center w-full z-50">
      {/* Logo */}
      <Link
        to="hero"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="text-cyan-400"
        className="cursor-pointer"
      >
        <img src={Logo} alt="Logo" className="w-32 md:w-40" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-lg font-medium">
        {["hero", "about", "projects", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-cyan-400"
            className="hover:text-cyan-400 duration-300 cursor-pointer capitalize"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Desktop Resume Button */}
      <div className="hidden md:flex">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-cyan-400 text-black text-sm md:text-base font-medium md:font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
        >
          Resume <FaArrowDown />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleMenuToggle}
        className="md:hidden flex items-center justify-center"
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed top-0 left-0 w-64 h-full bg-[#0F172A] border-r border-cyan-400 p-6 z-50 flex flex-col gap-8"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button onClick={handleMenuToggle}>
                <IoMdClose size={24} className="text-cyan-400" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-6 text-lg font-medium">
              {["hero", "about", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={handleMenuToggle}
                  activeClass="text-cyan-400"
                  className="hover:text-cyan-400 duration-300 cursor-pointer capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Resume Button */}
            <div className="mt-auto">
              <a
                href="/resume.pdf"
                download
                className="block text-center bg-cyan-400 text-black font-medium py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
