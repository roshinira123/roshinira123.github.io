// src/components/Projects.js

import { FaGear } from "react-icons/fa6";
import { projects } from "@/components/data";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaGear className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className=" mx-auto leading-relaxed text-base">
            Check out these projects, where I put my skills to use. I am
            experienced in HTML, Java, C++, Cascading Style Sheets (CSS),
            JavaScript, GitHub, Linux, Next.js, TailwindCSS, Figma, ESLint,
            Prettier, GitHub Actions, React, Agile, Scrum. Currently expanding
            my skills towards AI/ML, and will be creating more projects to come!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-75 p-8 rounded">
                <h2 className="text-lg font-medium title-font mb-4 text-white">
                  {project.title}
                </h2>
                <p className="leading-relaxed mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 inline-flex items-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
