'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        if (newTrail.length > 20) {
          return newTrail.slice(1);
        }
        return newTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="fixed w-2 h-2 rounded-full bg-secondary pointer-events-none"
          style={{
            left: point.x,
            top: point.y,
            opacity: 1 - index / trail.length,
            scale: 1 - index / trail.length,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - index / trail.length, scale: 1 - index / trail.length }}
          transition={{ duration: 0.1 }}
        />
      ))}
    </>
  );
};

export default CursorTrail; 