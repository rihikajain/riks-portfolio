import React from "react";
import { motion } from "framer-motion";

const highlights = [
  "Top 50 finalist in Smart India Hackathon",
  "NFT artist event organizer",
  "Club/event council leadership",
  "Award winner in college-level competitions",
];

function Leadership() {
  return (
    <section id="leadership" className="py-16 bg-primary/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-primary-dark mb-4">
          Leadership & Achievements
        </h2>
        <ul className="list-disc list-inside text-primary-dark text-lg space-y-2 ml-3">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
export default Leadership;
