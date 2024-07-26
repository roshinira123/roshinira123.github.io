import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
const Home = () => {
  return (
    <main className="text-gray-900 bg-blue-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
