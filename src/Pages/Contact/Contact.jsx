import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_Id,
        import.meta.env.VITE_template,
        data,
        import.meta.env.VITE_public_key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for contacting me.",
            confirmButtonColor: "#00D3F2",
            timer: 2000,
          });
          setLoading(false);
          reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            confirmButtonColor: "#00D3F2",
          });
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 sm:px-2 bg-[#0F172A] text-white sm:p-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            <span className="text-cyan-400">Let’s Work</span> Together
          </h2>
          <p className="text-gray-300">
            Ready to discuss your project or just say hello? Don’t hesitate to
            reach out. I’d love to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-[#1E293B] p-3 rounded-md">
                <FaPhoneAlt className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Phone</p>
                <p>(+880) 01777853072</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#1E293B] p-3 rounded-md">
                <FaEnvelope className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Email</p>
                <p>shakil.sarkar1932@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#1E293B] p-3 rounded-md">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Address</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.div
          className="w-full md:flex-1 bg-[#1E293B] p-4 lg:p-10 rounded-md shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact <span className="text-cyan-400">Me !</span>
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full Name can't be blank",
                })}
                className="w-full p-3 rounded-md bg-[#0F172A] focus:outline focus:outline-cyan-400"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 rounded-md bg-[#0F172A] focus:outline focus:outline-cyan-400 "
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone")}
              className="w-full p-3 rounded-md bg-[#0F172A] focus:outline focus:outline-cyan-400  col-span-1"
            />

            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className="w-full p-3 rounded-md bg-[#0F172A] focus:outline focus:outline-cyan-400  col-span-1"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 rounded-md bg-[#0F172A] focus:outline focus:outline-cyan-400  col-span-1 sm:col-span-2"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-[-1rem] col-span-2">
                {errors.message.message}
              </p>
            )}

            <div className="col-span-1 sm:col-span-2 text-center">
              <button
                type="submit"
                className="w-40 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                {loading ? (
                  <span className="loading loading-infinity loading-lg"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
