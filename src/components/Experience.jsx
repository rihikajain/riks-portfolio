import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Xebia",
    duration: "Dec 2024 – Jul 2025",
    highlights: [
      "Improved responsiveness by 15%",
      "Optimized MongoDB queries (20% faster)",
      "Deployed 3 MERN apps using Appian",
      "Agile & Git-based collaboration",
    ],
  },
  {
    role: "Developer Intern",
    company: "Regex Software Services",
    duration: "Jul 2023 – Sep 2023",
    highlights: [
      "Built MERN stack projects",
      "API integration and backend dev",
      "Used GitHub extensively for collaboration",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16 bg-gradient-teal-reverse">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/80 border-l-8 border-primary p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-primary-dark">
                {exp.role} <span className="font-medium">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-primary mb-2">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default Experience;
