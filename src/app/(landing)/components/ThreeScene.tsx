'use client'
import React from 'react';
import {Canvas} from "@react-three/fiber";
import Cabinet from "@/app/components/Cabinet";
import {OrbitControls} from "@react-three/drei";

export interface ThreeSceneProps {
    texturePath?: string;
}

const ThreeScene:React.FC<ThreeSceneProps> = (
    {
        texturePath = '/textures/textwood.jpeg',
    }
) => {

    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[5, 5, 5]} intensity={1}/>
            <Cabinet texturePath={texturePath} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 2} // sabit yatay açı (90 derece)
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2} // sola en fazla 90°
                maxAzimuthAngle={Math.PI / 2}  // sağa en fazla 90°
                enableDamping
            />
        </Canvas>
    );
};

export default ThreeScene;
