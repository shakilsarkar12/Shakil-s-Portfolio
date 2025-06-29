import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-cyan-600 text-gray-400 py-8 mt-20">
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Shakil.Dev . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
