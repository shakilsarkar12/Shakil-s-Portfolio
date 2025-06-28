import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactSvg from "../../assets/contact.svg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
        confirmButtonColor: "#00D3F2"
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
        text: "Thanks for contacting me.",
      confirmButtonColor: "#00D3F2",
      timer: 2000,
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-7xl">
        {/* Left: Image & Contact Info */}
        <motion.div
          className="flex-1 text-gray-300 space-y-6 flex flex-col sm:flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center justify-center lg:justify-start "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* SVG Image */}
          <img
            src={ContactSvg}
            alt="Contact Illustration"
            className="w-64 h-auto mb-6"
          />

          <div>
            <h3 className="text-2xl text-cyan-300 font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>shakilwebdev@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <span>+880 1777853072</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 bg-[#1E293B] border border-cyan-400 rounded-xl p-3 sm:p-6 flex flex-col gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-transparent border border-gray-500 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-transparent border border-gray-500 text-gray-200 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-transparent border border-gray-500 text-gray-200 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
