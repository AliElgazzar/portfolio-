import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

interface SocialLink {
  icon: React.ComponentType<IconBaseProps>;
  href: string;
  label: string;
}

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: FaGithub as React.ComponentType<IconBaseProps>, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin as React.ComponentType<IconBaseProps>, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter as React.ComponentType<IconBaseProps>, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6">
              Frontend Engineer
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              I build beautiful, responsive, and user-friendly web applications
              using modern technologies like React, TypeScript, and Node.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-secondary hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 