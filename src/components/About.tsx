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
    <section id="about" className="py-20 bg-tertiary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
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
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              About <span className="text-secondary">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-secondary mx-auto"
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
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
                <Image
                  src="/avt.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full shadow-lg"
                >
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-secondary">
                Full Stack Developer
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I am a passionate Full Stack Developer with expertise in building
                modern web applications. With a strong foundation in both frontend
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
                    className="text-center p-4 bg-primary/50 backdrop-blur-sm rounded-lg"
                  >
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv.pdf"
                  download
                  className="px-6 py-3 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-colors"
                >
                  Download CV
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border-2 border-secondary text-secondary rounded-full font-medium hover:bg-secondary/10 transition-colors"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 