'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactIcon, NodeIcon, TypeScriptIcon, MongoIcon, GitIcon, DockerIcon } from "./icons";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
  ];

  const skills = [
    {
      name: 'React',
      level: 90,
      category: 'frontend',
      icon: <ReactIcon />
    },
    {
      name: 'Node.js',
      level: 85,
      category: 'backend',
      icon: <NodeIcon />
    },
    {
      name: 'TypeScript',
      level: 80,
      category: 'frontend',
      icon: <TypeScriptIcon />
    },
    {
      name: 'MongoDB',
      level: 75,
      category: 'backend',
      icon: <MongoIcon />
    },
    {
      name: 'Git',
      level: 85,
      category: 'tools',
      icon: <GitIcon />
    },
    {
      name: 'Docker',
      level: 70,
      category: 'tools',
      icon: <DockerIcon />
    }
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 bg-primary-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-text-primary"
            >
              My <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-accent mx-auto"
            />
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary-950 shadow-soft'
                    : 'bg-primary-800/50 text-text-secondary hover:bg-primary-800 hover:text-text-primary'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">
                      {skill.name}
                    </h3>
                    <p className="text-text-secondary">
                      {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                    </p>
                  </div>
                </div>
                <div className="relative h-2 bg-primary-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-accent-light"
                  />
                </div>
                <div className="mt-2 text-right">
                  <span className="text-sm text-text-secondary">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-text-secondary mb-6">
              Always learning and expanding my skill set to deliver the best solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-primary-950 px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Let&apos;s Work Together
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 