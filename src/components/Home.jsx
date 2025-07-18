import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/8886653.jpg"; // Your image should be present here

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teal overlay for clarity & mood */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px] z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Hi, I'm Rihika <span className="inline-block animate-bounce">🚀</span>
        </h1>
        <h2 className="text-2xl text-white font-bold bg-primary/70 px-4 py-2 rounded-xl inline-block mb-4 shadow">
          Software Developer (MERN)
        </h2>
      </motion.div>
    </section>
  );
}

export default Home;
