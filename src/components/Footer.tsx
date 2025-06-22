import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

interface SocialLink {
  icon: React.ComponentType<IconBaseProps>;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: SocialLink[] = [
    { icon: FaGithub as React.ComponentType<IconBaseProps>, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin as React.ComponentType<IconBaseProps>, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter as React.ComponentType<IconBaseProps>, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {renderIcon(social.icon, { size: 24 })}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center">
              Made with{' '}
              {renderIcon(FaHeart as React.ComponentType<IconBaseProps>, { size: 20, className: 'mx-2 text-red-500 animate-pulse' })} by{' '}
              <a
                href="#home"
                className="ml-2 text-primary hover:underline"
              >
                Ali Elgazzar
              </a>
            </p>
            <p className="mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="mt-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 