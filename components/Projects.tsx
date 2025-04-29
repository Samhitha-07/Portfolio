'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import projectData from '../data/projects.json';

type Project = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: 'ML-DL' | 'LLM-RAG' | 'Data Analyst' | 'Web Design';
};

const projects: Project[] = projectData as Project[]; // ✅ Type assertion

const categories = ['All', 'ML-DL', 'LLM-RAG', 'Data Analyst', 'Web Design'];

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCards(0);

    if (category === 'All') {
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setVisibleCards(index);
        if (index === projects.length) clearInterval(interval);
      }, 150);
    } else {
      const filtered = projects.filter((project) => project.category === category);
      setVisibleCards(filtered.length);
    }
  };

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black/85 inline">
          Projects <span className="text-6xl sm:text-7xl md:text-8xl text-orange-400 mb-4">.</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-400 text-white'
                  : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-8 gap-6 md:gap-8 lg:gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                index < visibleCards && (
                  <motion.div
                    key={`${project.title}-${index}`}  // Combining title and index for uniqueness
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/80 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-xl md:hover:shadow-2xl"
                  >
                    <div className="mb-3 md:mb-4 relative h-48 sm:h-52 md:h-56 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-md"
                        priority={index < 2}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 md:mb-2 text-zinc-50 hover:italic transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-50 mb-3 md:mb-4 hover:italic transition-all duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.tech.map((techItem, idx) => (
                        <span
                          key={idx}
                          className="bg-zinc-50 font-semibold text-gray-600 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs sm:text-sm hover:italic transition-all duration-300"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base text-orange-400 hover:italic font-semibold"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base text-orange-400 hover:italic font-semibold"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Projects;
