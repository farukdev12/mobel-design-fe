'use client'
import React from 'react';
import { useTexture } from '@react-three/drei';
export interface PanelProps {
    size: Array<number>;
    position: Array<number>;
    texturePath: string;
}

const Panel:React.FC<PanelProps> = (
    {
        size,
        position,
        texturePath
    }
) => {
    const texture = useTexture(texturePath)
    return (
        <mesh position={position}>
            <boxGeometry args={size}/>
            <meshStandardMaterial map={texture} />
        </mesh>
    );
};

export default Panel;
