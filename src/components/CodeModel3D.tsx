'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// Load mô hình Macbook từ thư mục public
function MacbookModel() {
    const { scene } = useGLTF('/models/laptop.glb');
    return <primitive object={scene} scale={0.3} />;
}

export default function CodeModel3D() {
    return (
        <Canvas
            camera={{ position: [0, 1, 3], fov: 35 }}
            style={{ width: '100%', height: '100%' }}
        >
            {/* Ánh sáng */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />

            {/* Mô hình + điều khiển xoay */}
            <Suspense fallback={null}>
                <MacbookModel />
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}