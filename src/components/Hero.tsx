'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const CodeModel3D = dynamic(() => import('./CodeModel3D'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-r from-secondary/20 to-accent/20 animate-pulse" />
    ),
});

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="section-gradient" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Hi, I&apos;m{' '}
                            <span className="gradient-text">Nguyen Son Everestt</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 gradient-text"
                        >
                            Full Stack Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-text-secondary text-lg mb-8"
                        >
                            I build exceptional digital experiences that make an impact.
                            Let&apos;s create something amazing together.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="btn-gradient px-8 py-3 rounded-full font-medium"
                            >
                                Get in Touch
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 rounded-full font-medium border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors"
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
                        {/* 3D Code Model - Không bị giới hạn khung, không bị cắt */}
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
                                className="w-6 h-6 text-secondary"
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