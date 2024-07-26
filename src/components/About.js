"use client";
import React from "react";
import Headshot from "@/data/Roshini_Headshot_1.jpeg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I am Roshini!
            <br className="hidden lg:inline-block" />I am a{" "}
            <span>
              <Typewriter
                words={[
                  "Software Engineer.",
                  "Leader.",
                  "Creative.",
                  "Book-Lover.",
                  "Product Manager.",
                ]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Computer Science with Business Applications major at UC
            Riverside! I am highly motivated, self-driven with strong leadership
            qualities, and looking for challenging and innovative roles in tech,
            which will enable me to utilize and grow my skills.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="Headshot"
            src={Headshot}
          />
        </div>
      </div>
    </section>
  );
}
