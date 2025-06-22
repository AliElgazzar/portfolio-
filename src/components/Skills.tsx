import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconBaseProps } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiMongodb,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

  const skills: Skill[] = [
    { name: 'React', icon: SiReact as React.ComponentType<IconBaseProps>, level: 90, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript as React.ComponentType<IconBaseProps>, level: 85, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript as React.ComponentType<IconBaseProps>, level: 90, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs as React.ComponentType<IconBaseProps>, level: 80, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss as React.ComponentType<IconBaseProps>, level: 85, color: '#06B6D4' },
    { name: 'Git', icon: SiGit as React.ComponentType<IconBaseProps>, level: 85, color: '#F05032' },
    { name: 'Docker', icon: SiDocker as React.ComponentType<IconBaseProps>, level: 75, color: '#2496ED' },
    { name: 'MongoDB', icon: SiMongodb as React.ComponentType<IconBaseProps>, level: 80, color: '#47A248' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="card card-hover"
              >
                <div className="flex items-center mb-2">
                  {renderIcon(skill.icon, {
                    className: 'w-8 h-8 mr-3',
                    style: { color: skill.color }
                  })}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'HTML5',
                  'CSS3',
                  'SASS/SCSS',
                  'Redux',
                  'GraphQL',
                  'REST APIs',
                  'Jest',
                  'Webpack',
                  'Responsive Design',
                  'UI/UX Design',
                  'Agile Methodologies',
                  'Problem Solving',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 