import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-cyan-600 text-gray-400 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="w-32"><img src={Logo} alt="Shakil" /></div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-cyan-400 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/shakilsarkar12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Shakil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
