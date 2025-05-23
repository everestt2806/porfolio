'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: [
        'Led development of enterprise-level applications using React, Node.js, and MongoDB',
        'Implemented CI/CD pipelines and automated testing processes',
        'Mentored junior developers and conducted code reviews',
        'Optimized application performance and reduced load times by 40%',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple web applications using React and Express',
        'Collaborated with UX designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Improved code quality through unit testing and documentation',
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'Redux', 'Jest'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions Ltd.',
      period: '2018 - 2020',
      description: [
        'Built responsive user interfaces using React and TypeScript',
        'Implemented state management using Redux and Context API',
        'Worked with RESTful APIs and GraphQL',
        'Participated in agile development processes',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Sass'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="experience" className="py-20 bg-primary-950 relative overflow-hidden">
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
              Work <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-accent mx-auto"
            />
          </div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent to-accent-light" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary-950" />

                  {/* Content Card */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 shadow-soft hover:shadow-hover transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-accent">
                            {exp.title}
                          </h3>
                          <p className="text-text-secondary">{exp.company}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-sm text-accent font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-text-secondary"
                          >
                            <span className="text-accent mt-1">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-text-secondary mb-6">
              Looking for new opportunities to grow and make an impact.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="bg-accent hover:bg-accent-dark text-primary-950 px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 