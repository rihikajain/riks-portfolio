import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
