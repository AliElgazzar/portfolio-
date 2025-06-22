import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconBaseProps } from 'react-icons';
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiTailwindcss, SiGit,
  SiDocker, SiMongodb, SiHtml5, SiCss3, SiSass, SiRedux, SiGraphql, SiJest, SiWebpack
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderIcon = (Icon: React.ComponentType<IconBaseProps>, props: IconBaseProps = {}) => {
    return React.createElement(Icon, props);
  };

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux', icon: SiRedux },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'SASS/SCSS', icon: SiSass },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'GraphQL', icon: SiGraphql },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'Jest', icon: SiJest },
        { name: 'Webpack', icon: SiWebpack },
      ],
    },
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card card-hover"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center">
                      {renderIcon(skill.icon, { className: 'w-6 h-6 mr-3 text-primary' })}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
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