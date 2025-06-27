import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features?: string[];
  github: string;
  live: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

const projects: Project[] = [
  {
    title: 'Smart Fitness & Workout Tracker',
    description:
      'A comprehensive web application designed to empower users in managing their fitness journey through intelligent workout tracking, routine planning, and AI-powered insights. The platform ensures secure user authentication and delivers a highly responsive user experience.',
    image: '/projects/fitness-tracker-placeholder.svg',
    technologies: [
      'Angular (v20)',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB Atlas',
      'JWT Authentication',
      'OpenAI API (GPT-4o-mini)',
      'Vector Search (RAG)',
      'Angular Signals'
    ],
    features: [ 
      'Secure User Authentication with JWT (Login/Signup)',
      'Personalized Workout Routine Creation & Management',
      'Detailed Workout Logging & Progress Tracking',
      'AI-Powered Exercise Suggestions (Function Calling)',
      'AI-Driven Workout Plan Generation (Function Calling)',
      'Intelligent Fitness Q&A via RAG from Curated Knowledge Base',
      'Type-Safe Frontend & Backend Architecture',
      'Lazy-Loaded Routing for Optimized Performance',
      'Responsive UI with External Styles'
    ],
    github: 'https://github.com/yourusername/fitness-tracker-app',
    live: 'https://fitness-tracker-demo.com', 
  },
  {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '../assets/fitnesstracker.png',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/taskmanager',
      live: 'https://taskmanager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode support.',
      image: '/projects/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://portfolio-demo.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={titleVariants}
            className="section-title"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectCardVariants}
                className="card card-hover group"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {renderIcon(FaGithub as React.ComponentType<IconBaseProps>, { size: 24 })}
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {renderIcon(FaExternalLinkAlt as React.ComponentType<IconBaseProps>, { size: 24 })}
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#007AFF',
                        color: 'white',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={ctaVariants}
            className="mt-12 text-center"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
              {renderIcon(FaGithub as React.ComponentType<IconBaseProps>, { size: 20, className: 'ml-2' })}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 