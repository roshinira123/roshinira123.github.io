import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-400 bg-blue-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-white">
            Contact Me!
          </h1>
          <div className="w-full lg:w-1/3 bg-gray-800 bg-opacity-75 p-8 rounded mb-4">
            <div className="mb-4">
              <FaEnvelope className="inline-block w-6 mr-2 text-blue-400" />
              <span className="text-lg text-blue-400">rrang020@ucr.edu</span>
            </div>
            <div className="mb-4">
              <FaLinkedin className="inline-block w-6 mr-2 text-blue-400" />
              <a
                href="https://www.linkedin.com/in/roshini-rangarajan/"
                className="text-lg text-blue-400"
              >
                LinkedIn
              </a>
            </div>
            <div className="mb-4">
              <FaGithub className="inline-block w-6 mr-2 text-blue-400" />
              <a
                href="https://github.com/roshinira123"
                className="text-lg text-blue-400"
              >
                GitHub
              </a>
            </div>
            <div>
              <FaFileAlt className="inline-block w-6 mr-2 text-blue-400" />
              <a
                href="https://drive.google.com/file/d/17Xp5iRMMTh_IkKsMsI6WkL8WewB-rnH4/view?usp=sharing"
                className="text-lg text-blue-400"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
