'use client'
import React, {useRef} from 'react';
import * as THREE from "three";

const RotatingBox = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    // useFrame(() => {
    //     if (meshRef.current) {
    //         meshRef.current.rotation.x += 0.01;
    //         meshRef.current.rotation.y += 0.01;
    //     }
    // });
    return (
        <group>
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <boxGeometry args={[0.1, 3, 2]}/>
                <meshStandardMaterial color="orange"/>
            </mesh>
            <mesh ref={meshRef} position={[2, 0, 0]}>
                <boxGeometry args={[0.1, 3, 2]}/>
                <meshStandardMaterial color="orange"/>
            </mesh>
        </group>
    );
};

export default RotatingBox;
