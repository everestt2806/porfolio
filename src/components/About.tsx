'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
  ];

  return (
    <section id="about" className="py-20 bg-primary-950 relative overflow-hidden">
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
              About <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-accent mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                <Image
                  src="/avt.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                />
                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-accent">
                Software Engineer
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I am a passionate Software Engineer with expertise in building
                modern applications. With a strong foundation in both frontend
                and backend technologies, I create seamless user experiences and
                robust server-side solutions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project I work on is not only
                functional but also delivers exceptional user experiences.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-primary-800/50 backdrop-blur-sm rounded-lg shadow-soft"
                  >
                    <div className="text-2xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="bg-accent hover:bg-accent-dark text-primary-950 px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#projects"
                  className="px-8 py-3 rounded-lg font-medium border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 