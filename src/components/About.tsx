import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="section-title"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 text-justify">
              Front-End Software Engineer with professional experience in designing and developing dynamic, responsive web applications using React.js, TypeScript, JavaScript, and modern UI frameworks. Proficient in translating business requirements into intuitive user experiences, optimizing application performance, and ensuring cross-browser compatibility. Strong collaborator in agile environments, with a focus on clean code, scalability, and user-centric design. Eager to continuously grow full-stack development skills and contribute to impactful software solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={cardVariants}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Master's Degree in Computer Science</h4>
                  <p className="text-secondary">Maharishi International University, 2024-2026</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor's Degree in Mechatronics Engineering</h4>
                  <p className="text-secondary">Benha University, 2017-2022</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Front-end Engineer</h4>
                  <p className="text-secondary">Enozom Software, 2022-2024</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                    <li>Developed responsive web apps with React, TypeScript, and Tailwind CSS.</li>
                    <li>Led front-end development for microservice-based features.</li>
                    <li>Designed and built reusable, modular UI components.</li>
                    <li>Improved front-end performance via lazy loading and code splitting.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              Download Resume
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 