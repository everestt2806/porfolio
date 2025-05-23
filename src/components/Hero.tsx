'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const CodeModel3D = dynamic(() => import('./CodeModel3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-r from-accent/20 to-accent-light/20 animate-pulse" />
    ),
});

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden flex items-center bg-primary-950">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 text-sm font-medium"
                        >
                            Welcome to my portfolio
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-text-primary"
                        >
                            Hi, I&apos;m{' '}
                            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                                Nguyen Son Everestt
                            </span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 text-accent"
                        >
                            Software Engineer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="text-text-secondary text-lg mb-8 max-w-xl"
                        >
                            I build exceptional digital experiences that make an impact.
                            Let&apos;s create something amazing together.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
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

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full"
                    >
                        <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
                            <CodeModel3D />
                        </div>

                        {/* Scroll indicator */}
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-6 h-6 text-accent"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;