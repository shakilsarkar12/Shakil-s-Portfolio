import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import yourLogo from "../../assets/logo.png";

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
      className="bg-[#0F172A] text-white px-6 md:px-20 py-4 flex justify-between items-center sticky w-full z-50"
    >
      {/* Logo */}
      <Link to="/">
        <img src={yourLogo} alt="Logo" className="w-40" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center  gap-10 text-lg font-medium">
        <Link to="/" className="hover:text-cyan-400 duration-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-cyan-400 duration-300">
          About
        </Link>
        <Link to="/projects" className="hover:text-cyan-400 duration-300">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-cyan-400 duration-300">
          Contact
        </Link>
        {/* Resume Button */}
      </div>

      <a
        href="/resume.pdf" // your actual PDF file path after adding to public folder
        download
        className="bg-cyan-400 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-cyan-300 transition duration-300"
      >
        Download CV
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={handleMenuToggle}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-[#0F172A] border border-cyan-400 rounded-md shadow-md flex flex-col p-4 space-y-4 md:hidden z-50">
          <Link
            onClick={handleMenuToggle}
            to="/"
            className="hover:text-cyan-400"
          >
            Home
          </Link>
          <Link
            onClick={handleMenuToggle}
            to="/about"
            className="hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            onClick={handleMenuToggle}
            to="/projects"
            className="hover:text-cyan-400"
          >
            Projects
          </Link>
          <Link
            onClick={handleMenuToggle}
            to="/contact"
            className="hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
