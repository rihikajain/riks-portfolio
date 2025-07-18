import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-r from-white to-primary/10 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
        <div className="mb-4 bg-primary/5 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-primary-dark">
            B.Tech in Information Technology
          </h3>
          <span className="text-sm text-primary">
            JECRC College, Jaipur (2021–2025)
          </span>
          <p className="text-gray-700">CGPA: 8.8/10</p>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-primary-dark">
            12th CBSE Board
          </h3>
          <span className="text-sm text-primary">
            MODY School, Laxmangarh (2018–2020)
          </span>
          <p className="text-gray-700">Score: 89%</p>
        </div>
      </motion.div>
    </section>
  );
}
export default Education;
