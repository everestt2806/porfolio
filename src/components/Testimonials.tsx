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
        <section id="testimonials" className="py-20 bg-tertiary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="section-gradient" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="glass p-8 rounded-lg"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <p className="text-text-secondary mb-4">
                                            &quot;{testimonials[currentIndex].text}&quot;
                                        </p>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary">
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
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-secondary text-primary hover:scale-110 transition-transform"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-secondary text-primary hover:scale-110 transition-transform"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-secondary' : 'bg-primary'
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;