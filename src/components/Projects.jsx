import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Personal Portfolio Website",
    date: "Nov 2024",
    highlights: [
      "Built with React and Tailwind CSS",
      "Deployed via Vercel",
      "Responsive and accessible UI",
    ],
  },
  {
    name: "Task Management Dashboard",
    date: "Sep 2023 – Nov 2023",
    highlights: [
      "React frontend with CRUD operations",
      "REST APIs using Node.js/Express.js",
      "MongoDB for storage, real-time UI",
    ],
  },
  {
    name: "COVID Data Tracker",
    date: "2022",
    highlights: [
      "Data visualisation via Chart.js",
      "Live API integration",
      "Responsive dashboard design",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 6px 32px 2px rgba(0,205,188,0.19)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-primary/10 to-white border-t-4 border-primary rounded-xl p-6 shadow-xl flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary-dark mb-1">
                {project.name}
              </h3>
              <span className="text-xs text-primary mb-2">{project.date}</span>
              <ul className="list-disc pl-5 text-gray-700 flex-1 mb-2">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
