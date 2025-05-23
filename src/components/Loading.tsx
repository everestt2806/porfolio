'use client';

import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative"
            >
                {/* Outer Ring */}
                <motion.div
                    className="w-16 h-16 rounded-full border-4 border-primary-800"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Middle Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-accent"
                    animate={{
                        rotate: -360,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Inner Ring */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-accent-light"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Center Dot */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Loading; 