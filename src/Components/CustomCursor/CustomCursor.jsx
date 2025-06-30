import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const clickDown = () => setClick(true);
    const clickUp = () => setClick(false);
    window.addEventListener("mousedown", clickDown);
    window.addEventListener("mouseup", clickUp);

    const links = document.querySelectorAll("a, button, .cursor-hover");

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    links.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", clickDown);
      window.removeEventListener("mouseup", clickUp);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      {/* Main Cursor */}
      <div
        className={`fixed z-[9999] pointer-events-none transition-transform duration-100 ease-out
          ${
            click
              ? "scale-125 bg-cyan-300"
              : hover
              ? "scale-150 bg-cyan-500"
              : "scale-100 bg-cyan-400"
          }
          rounded-full mix-blend-difference`}
        style={{
          left: position.x + "px",
          top: position.y + "px",
          transform: "translate(-50%, -50%)",
          width: "18px",
          height: "18px",
          userSelect: "none",
        }}
      ></div>

      {/* Ripple Click Effect */}
      {click && (
        <span
          className="fixed z-[9998] pointer-events-none border border-cyan-400 rounded-full opacity-60 animate-ping"
          style={{
            left: position.x + "px",
            top: position.y + "px",
            transform: "translate(-50%, -50%)",
            width: "50px",
            height: "50px",
            userSelect: "none",
          }}
        ></span>
      )}
    </div>
  );
};

export default CustomCursor;
