import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import myImage from '../assets/me.jpg';

interface SocialLink {
  icon: React.ComponentType<IconBaseProps>;
  href: string;
  label: string;
}

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaGithub as React.ComponentType<IconBaseProps>, href: 'https://github.com/AliElgazzar', label: 'GitHub' },
    { icon: FaLinkedin as React.ComponentType<IconBaseProps>, href: 'https://www.linkedin.com/in/ali-elgazzar-1b853221a/', label: 'LinkedIn' },
  ];

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={myImage} 
              alt="Ali Elgazzar" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover shadow-lg"
            />
          </motion.div>
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Ali Elgazzar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-secondary mb-6">
                Frontend Engineer
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-600 dark:text-gray-300">
                I build beautiful, responsive, and user-friendly web applications
                using modern technologies like React, TypeScript, and Node.js.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn btn-secondary"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-secondary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {renderIcon(social.icon, { size: 24, 'aria-label': social.label })}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 