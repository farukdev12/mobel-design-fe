'use client';
import React from 'react';
import Panel from "@/app/components/Panel";

export interface CabinetProps {
    width?: number,
    height?: number,
    depth?: number,
    thickness?: number,
    shelfCount?: number,
    texturePath?: string,
}

const Cabinet:React.FC<CabinetProps> = (
    {
        width = 2,
        height = 5,
        depth = 1,
        thickness = 0.05,
        shelfCount = 4,
        texturePath = '/textures/textwood.jpeg'
    }
) => {


    const backPanelPosition: [number, number, number] = [0, 0, -depth / 2];

    const shelfSpacing = height / (shelfCount + 1);

    const shelves = Array.from({ length: shelfCount }).map((_, i) => {
        const y = height / 2 - shelfSpacing * (i + 1);
        return (
            <Panel
                texturePath={texturePath}
                key={`shelf-${i}`}
                position={[0, y, 0]}
                size={[width, thickness, depth]}
            />
        );
    });

    return (
        <>
            {/* Arkalik */}
            <Panel texturePath={texturePath} position={backPanelPosition} size={[width, height, thickness]} />

            {/* baza */}
            <Panel
                texturePath={texturePath}
                position={[0, (-height / 2) + (thickness / 2), 0]}
                size={[width, thickness, depth]}
            />

            {/* Üst */}
            <Panel
                texturePath={texturePath}
                position={[0, (height / 2) - (thickness / 2), 0]}
                size={[width, thickness, depth]}
            />

            {/* Sol dikme */}
            <Panel
                texturePath={texturePath}
                position={[-width / 2, 0, 0]}
                size={[thickness, height, depth]}
            />

            {/* Sağ dikme */}
            <Panel
                texturePath={texturePath}
                position={[width / 2, 0, 0]}
                size={[thickness, height, depth]}
            />
            {/* raflar */}
            {shelves}
        </>
    );
};

export default Cabinet;
