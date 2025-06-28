import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const closeModal = () => setSelectedProject(null);

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">My Projects</h2>

      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-[#1E293B] border border-cyan-400 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-64 md:h-full md:w-2/4 object-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full"
              />
            </div>

            <div className="p-3 sm:p-6 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h3 className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-600 text-sm text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 text-cyan-300 text-xl mt-2">
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white duration-300"
                  title="Client Repository"
                >
                  <FaGithub />
                </a>
                {project.serverRepo && (
                  <a
                    href={project.serverRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white duration-300"
                    title="Server Repository"
                  >
                    <FaGithub />
                  </a>
                )}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white duration-300"
                  title="Live Site"
                >
                  <FaExternalLinkAlt />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="hover:text-white duration-300 cursor-pointer"
                  title="Project Details"
                >
                  <FaInfoCircle />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
          className="fixed inset-0 bg-white/50 flex items-center justify-center z-50 px-4"
        >
          <div className="bg-[#0F172A] p-6 rounded-xl w-full max-w-lg relative border border-cyan-400">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-2xl cursor-pointer"
            >
              <IoMdClose />
            </button>

            <h3 className="text-2xl text-cyan-300 font-semibold mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-cyan-600 text-sm text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="text-gray-400 text-sm mb-4 list-disc list-inside">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="flex gap-4 text-cyan-300 text-xl mt-2">
              <a
                href={selectedProject.clientRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white duration-300"
                title="Client Repo"
              >
                <FaGithub />
              </a>
              {selectedProject.serverRepo && (
                <a
                  href={selectedProject.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white duration-300"
                  title="Server Repo"
                >
                  <FaGithub />
                </a>
              )}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white duration-300"
                title="Live Site"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Projects;
