'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, LayoutGroup } from 'framer-motion';
import projectData from '../data/projects.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Project = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  category: 'AI-ML' | 'Web Design';
};

const projects: Project[] = projectData as Project[];
const categories = ['All', 'AI-ML', 'Web Design'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black/85 inline">
          Projects <span className="text-6xl sm:text-7xl md:text-8xl text-orange-400 mb-4">.</span>
        </h2>

        {/* Category Buttons */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 mt-6 mb-6"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-400 text-white'
                  : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Swiper for Projects */}
        <LayoutGroup>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.custom-swiper-pagination',
              }}
              loop={true}
              grabCursor={true}
              className="px-6 md:px-12"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={`${project.title}-${index}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="bg-black/80 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-xl md:hover:shadow-2xl h-full"
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
                          className="text-sm md:text-base text-orange-400 hover:underline hover:italic font-semibold transition-all"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base text-orange-400 hover:underline hover:italic font-semibold transition-all"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev absolute left-[-50px] sm:left-[-60px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black p-3 text-white shadow-lg transition-all hover:bg-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="custom-swiper-button-next absolute right-[-50px] sm:right-[-60px] top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-black p-3 text-white shadow-lg transition-all hover:bg-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Custom Pagination */}
            <div className="custom-swiper-pagination mt-8 flex justify-center gap-2" />
          </div>
        </LayoutGroup>
      </div>

      {/* Swiper Custom Styles */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #f97316;
        }
      `}</style>
    </section>
  );
};

export default Projects;
