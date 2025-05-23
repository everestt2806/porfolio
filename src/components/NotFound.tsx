'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-primary-950 relative overflow-hidden flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                        <div className="relative w-32 h-32 mx-auto">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                            <div className="relative w-full h-full flex items-center justify-center">
                                <svg
                                    className="w-20 h-20 text-accent"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-text-primary"
                    >
                        404 - Page Not Found
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-text-secondary mb-8"
                    >
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 rounded-lg bg-accent hover:bg-accent-dark text-primary-950 font-medium shadow-soft hover:shadow-hover transition-all duration-300"
                            >
                                Back to Home
                            </motion.button>
                        </Link>

                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 rounded-lg border-2 border-accent text-accent hover:bg-accent/10 font-medium transition-all duration-300"
                            >
                                Contact Support
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound; 