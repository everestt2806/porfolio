'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Shinosuke',
            role: 'Senior Developer',
            company: 'Tech Corp',
            image: '/shinosuke.jpg',
            text: 'An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.',
        },
        {
            name: 'Edogawa Conan',
            role: 'Project Manager',
            company: 'Digital Solutions',
            image: '/conan.jpg',
            text: 'Working with this developer was a pleasure. They are not only technically skilled but also great at communication and collaboration.',
        },
        {
            name: 'Doraemon',
            role: 'CTO',
            company: 'Startup Inc',
            image: '/doraemon.jpg',
            text: 'One of the most talented developers I have had the pleasure to work with. Their ability to learn and adapt quickly is impressive.',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 bg-primary-950 relative overflow-hidden">
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
                            Client <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Testimonials</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100px' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-1 bg-accent mx-auto"
                        />
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-8 shadow-soft"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl" />
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <p className="text-text-secondary mb-4">
                                            &quot;{testimonials[currentIndex].text}&quot;
                                        </p>
                                        <div>
                                            <h3 className="text-xl font-bold text-accent">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-text-secondary">
                                                {testimonials[currentIndex].role} at{' '}
                                                {testimonials[currentIndex].company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-lg bg-primary-800/50 backdrop-blur-sm text-accent hover:bg-accent/10 transition-all duration-300 shadow-soft"
                            >
                                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-lg bg-primary-800/50 backdrop-blur-sm text-accent hover:bg-accent/10 transition-all duration-300 shadow-soft"
                            >
                                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === index
                                            ? 'bg-accent w-4'
                                            : 'bg-primary-700 hover:bg-accent/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;