'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, BookOpenCheck, Target, Zap, Medal, Smile } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const boxVariants = {
  left: { opacity: 0, x: -50 },
  right: { opacity: 0, x: 50 },
  bottom: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full h-fit lg:h-fit bg-black px-6 py-10 mt-4 lg:py-10 xl:py-10 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-6 font-code"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >


      {/* Column 1 */}
      <div className="space-y-6">
        <motion.div
          variants={boxVariants}
          initial="left"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.3)] transition-all duration-300"
        >
          <motion.img
            src="/assets/mee1.jpg"
            alt="Samhitha"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-full h-auto aspect-square object-cover rounded-xl mb-2"
          />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-black">Samhitha S</h2>
          <p className="text-orange-500 text-sm sm:text-base">AI/ML Developer</p>
          <p className="mt-4 text-sm sm:text-base">Building intelligent systems with a creative touch</p>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="left"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.2)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center gap-2">
            <Target className="text-orange-500 w-5 h-5" /> My Goals
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
            <li>Master Agentic AI & RAG</li>
            <li>Build ethical ML models</li>
            <li>Open-source contributions</li>
            <li>Creative coding in AI</li>
            <li>Lead impactful tech communities</li>
          </ul>
        </motion.div>
      </div>

      {/* Column 2 */}
      <div className="space-y-6">
        <motion.div
          variants={boxVariants}
          initial="bottom"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.2)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-xl font-bold text-black mb-4 flex items-center gap-2">
            <Code className="text-orange-500 w-5 h-5" /> About Me
          </h3>
          <pre className="leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
{`const Samhitha = {
  role: "AI/ML Developer",
  skills: ["ML", "Full Stack", "NLP", 
           "Gen AI"],
  passion: "Creating agentic & 
            emotionally aware AI",
  focus: "RAG Systems, Emotion AI, 
          Ethical Innovation",
  achievements: ["Speaker", "Mentor", 
                 "Researcher"],
  vibe: "Soft tech. Cool mind. Big 
        heart. Dream chaser",
  values: ["Empathy", "Curiosity", 
          "Community", "Growth"]
};`}
          </pre>
          <span className="text-orange-500 text-lg mt-2 block animate-pulse">_</span>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="bottom"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.3)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center gap-2">
            <Zap className="text-orange-500 w-5 h-5" /> Skills
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
            <li>Machine Learning</li>
            <li>Full Stack Development</li>
            <li>NLP & LLMs</li>
            <li>Generative AI</li>
            <li>Creative Coding & UI/UX</li>
          </ul>
        </motion.div>
      </div>

      {/* Column 3 */}
      <div className="space-y-6">
        <motion.div
          variants={boxVariants}
          initial="right"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.2)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center gap-2">
            <Medal className="text-orange-500 w-5 h-5" /> Achievements
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
            <li>Google Gen AI Certification</li>
            <li>Published Paper on Robotics (KAN vs MLP)</li>
            <li>ISTE Workshop Host - Embedded Systems</li>
            <li>E-commerce Website with AI</li>
            <li>ML Bootcamp Mentor</li>
            <li>GirlUp Events Coordinator</li>
            <li>RCAAI Conference Presenter (2024)</li>
          </ul>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="right"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.3)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center gap-2">
            <BookOpenCheck className="text-orange-500 w-5 h-5" /> Currently Learning
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
            <li>Agentic AI Models</li>
            <li>Advanced RAG Systems</li>
            <li>Voice + Emotion Recognition</li>
            <li>Scaling ML apps to production</li>
          </ul>
        </motion.div>

        <motion.div
          variants={boxVariants}
          initial="right"
          whileInView="visible"
          whileHover={{ scale: 1.04 }}
          viewport={{ once: true }}
          className="bg-white backdrop-blur-xl rounded-2xl p-4 text-slate-900 shadow-[0_0_20px_5px_rgba(255,115,0,0.3)] hover:shadow-[0_0_40px_10px_rgba(255,115,0,0.2)] transition-all duration-300"
        >
          <h3 className="text-base sm:text-lg font-bold text-black mb-2 flex items-center gap-2">
            <Smile className="text-orange-500 w-5 h-5" /> Beyond the Code
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
            <li>Drawn to soft aesthetics, clean UIs, and clever systems</li>
            <li>Finds peace in bike rides, cafés, and beach sunsets</li>
            <li>Loves exploring new music, coding jams, and podcasts</li>
            <li>Believes in the power of kindness, dreams, and collaboration</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
