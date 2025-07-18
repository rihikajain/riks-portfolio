import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-white flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 max-w-3xl text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am a Software Developer who has built web applications using React,
          JavaScript, and the MERN stack. Developed responsive user interfaces,
          integrated RESTful APIs, and implemented application state management.
          Built and maintained data models with MongoDB, managed source code
          with Git, and deployed projects through GitHub and Vercel. Applied
          Agile methods and worked on both frontend and backend development
          throughout each project phase.
        </p>
      </motion.div>
    </section>
  );
}
export default About;
