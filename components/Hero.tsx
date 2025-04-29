'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div 
      id="hero"
      className="flex flex-col items-center justify-center pt-6 sm:pt-20 min-h-screen px-4 pb-6 bg-white">
      {/* Spline Model */}
      <div className="w-full max-w-7xl h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] flex justify-center">
        <iframe
          src="https://my.spline.design/cutecomputerfollowcursor-sMF9a51cqeEHDAMej8v6rKXN/"
          className="rounded-lg shadow-lg"
          width={"100%"}
          height={"90%"}
        ></iframe>
      </div>

      {/* Animated Text */}
      <div className="text-center max-w-4xl mt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 leading-relaxed">
          <Typewriter
            words={[
              "Hi, I'm Samhitha",
              "Bonjour, Je suis Samhitha",
              "Hola, Soy Samhitha",
              "Ciao, Sono Samhitha",
              "Namaste, Main Samhitha hoon",
              "Hallo, Ich bin Samhitha",
              "Konnichiwa, Watashi wa Samhitha desu"
            ]}
            loop={0}
            cursor
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>
        <p className="text-2xl sm:text-2xl lg:text-4xl font-bold text-orange-400 mb-4">
          AI-ML Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
