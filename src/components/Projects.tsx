'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'design', label: 'Design' },
    ];

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with real-time inventory management and payment processing.',
            image: '/projects/ecommerce.jpg',
            category: 'web',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            github: 'https://github.com/yourusername/ecommerce',
            demo: 'https://ecommerce-demo.com',
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team features.',
            image: '/projects/taskmanager.jpg',
            category: 'web',
            technologies: ['React', 'Firebase', 'Material-UI'],
            github: 'https://github.com/yourusername/taskmanager',
            demo: 'https://taskmanager-demo.com',
        },
        {
            title: 'Fitness Tracker',
            description: 'A mobile app for tracking workouts, nutrition, and fitness progress.',
            image: '/projects/fitness.jpg',
            category: 'mobile',
            technologies: ['React Native', 'Redux', 'Node.js'],
            github: 'https://github.com/yourusername/fitness-tracker',
            demo: 'https://fitness-tracker-demo.com',
        },
        {
            title: 'Portfolio Website',
            description: 'A modern portfolio website with animations and responsive design.',
            image: '/projects/portfolio.jpg',
            category: 'design',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com/yourusername/portfolio',
            demo: 'https://portfolio-demo.com',
        },
    ];

    const filteredProjects = projects.filter(
        (project) => activeFilter === 'all' || project.category === activeFilter
    );

    return (
        <section id="projects" className="py-20 bg-primary-950 relative overflow-hidden">
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
                            My <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Projects</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-1 bg-accent mx-auto"
                        />
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    activeFilter === filter.id
                                        ? 'bg-accent text-primary-950 shadow-soft'
                                        : 'bg-primary-800/50 text-text-secondary hover:bg-primary-800 hover:text-text-primary'
                                }`}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-primary-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="flex gap-4">
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary-950 hover:bg-accent-dark transition-colors duration-300"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </motion.a>
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary-950 hover:bg-accent-dark transition-colors duration-300"
                                                >
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-accent mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-text-secondary mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-text-secondary mb-6">
                            Want to see more of my work? Check out my GitHub profile for additional projects.
                        </p>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://github.com/everestt2806"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-accent-dark text-primary-950 px-8 py-3 rounded-lg font-medium shadow-soft hover:shadow-hover transition-all duration-300"
                        >
                            View GitHub Profile
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 