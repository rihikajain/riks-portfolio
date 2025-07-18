import React from "react";
import { motion } from "framer-motion";

const skills = {
  Languages: ["JavaScript", "HTML", "CSS", "Python", "Java", "C++"],
  Frameworks: ["React", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  Tools: ["Git", "GitHub", "Vercel", "Postman", "VSCode"],
  Databases: ["MongoDB"],
};

function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg text-primary-dark mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {list.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="px-5 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-md text-sm font-medium cursor-pointer transition"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0px 4px 18px 3px #00CDBC44",
                      background: "linear-gradient(120deg,#028e8e,#00CDBC)",
                    }}
                    transition={{ duration: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
