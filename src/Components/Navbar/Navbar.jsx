import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleBodyClick = (e) => {
      if (
        isOpen &&
        !e.target.closest(".mobile-drawer") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="sticky top-0  bg-[#0F172A]/70 backdrop-blur-3xl text-white py-4 z-50">
      <div className=" flex justify-between items-center w-full z-50 px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-0 2xl:max-w-10/12  2xl:mx-auto">
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
          {["hero", "about", "skills", "projects", "contact"].map((item) => (
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
          className="menu-toggle md:hidden flex items-center justify-center"
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
              className="mobile-drawer md:hidden fixed top-0 -left-4 w-64 h-full bg-[#0F172A]"
            >
              <div className="bg-[#0F172A] h-screen w-full p-6 flex flex-col gap-8  z-50">
                {/* Close Button */}
                <div className="flex items-center justify-between mb-6">
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
                  <button onClick={handleMenuToggle}>
                    <IoMdClose size={24} className="text-cyan-400" />
                  </button>
                </div>
                {/* Nav Links */}
                <div className="flex flex-col gap-6 text-lg font-medium">
                  {["hero", "about", "skills", "projects", "contact"].map(
                    (item) => (
                      <Link
                        key={item}
                        to={item}
                        smooth={true}
                        duration={500}
                        spy={true}
                        onClick={handleMenuToggle}
                        activeClass="text-cyan-400"
                        className="hover:text-cyan-400 px-3 duration-300 cursor-pointer capitalize"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
                {/* Resume Button */}
                <div className="mt-auto w-fit mx-auto">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 hover:shadow-[0_0_10px_theme(colors.cyan.400)] text-sm hover:text-cyan-400 hover:bg-[#0F172A] text-[#0F172A] font-medium sm:font-semibold bg-cyan-400 border-2 border-cyan-400 rounded-full transition duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
