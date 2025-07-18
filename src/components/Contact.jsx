import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-teal">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-white mb-8 text-lg">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary hover:text-white border-2 border-white hover:border-primary transition text-xl"
        >
          Send Email
        </a>
      </motion.div>
    </section>
  );
}
export default Contact;
