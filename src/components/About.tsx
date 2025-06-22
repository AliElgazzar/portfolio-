import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a passionate Frontend Engineer with a strong foundation in modern web technologies.
                With several years of experience in building responsive and user-friendly applications,
                I specialize in creating seamless user experiences using React, TypeScript, and Node.js.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card card-hover">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor's Degree in Mechatronics Engineering</h4>
                    <p className="text-secondary">Benha university, 2017-2022</p>

                    <h4 className="font-medium">master's Degree in computer science</h4>
                    <p className="text-secondary">maher university, 2024-2026</p>
                  </div>
                  {/* Add more education items as needed */}
                </div>
              </div>

              <div className="card card-hover">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Front-end Engineer</h4>
                    <p className="text-secondary">Enozom Software, 2022-2024</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                      <li>Developed responsive, accessible web applications using React, TypeScript, and 
                        Tailwind CSS, delivering seamless user experiences across modern
                         browsers and device types.</li>
                      <li>Led front-end development for microservice-based features, collaborating 
                        closely with back-end engineers to ensure cohesive, 
                        scalable, and maintainable system</li>
                      <li>Designed and built reusable, modular UI components, accelerating 
                        development workflows and ensuring visual 
                        and functional consistency across the application.</li>

                        <li>* Improved front-end performance through optimization strategies including lazy loading,
                           code splitting, and adherence to modern best practices, reducing load times and
                            improving user engagement.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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