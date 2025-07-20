'use client'
import React, {useState} from 'react';
import ThreeScene from "@/app/(landing)/components/ThreeScene";
import Image from 'next/image'

const DesignYourselfSection = () => {
    const [selectedTexturePath, setSelectedTexturePath] = useState('/textures/textwood.jpeg')
    return (
        <div className={'flex w-screen h-[70vh] bg-secondary/25 gap-5'}>
            <div className={'flex w-full h-full gap-5 container mx-auto px-5'}>
                <div className={'w-1/2 h-full flex flex-col gap-5 py-8'}>
                    <ThreeScene texturePath={selectedTexturePath} />
                    <div className={'w-full flex justify-center gap-4'}>
                        <div onClick={() => setSelectedTexturePath('/textures/textwood.jpeg')} className="relative h-[60px] w-[60px] rounded-md overflow-hidden">
                            <Image
                                src="/textures/textwood.jpeg"
                                alt="texture"
                                fill
                                style={{objectFit: "cover"}}
                            />
                        </div>
                        <div onClick={() => setSelectedTexturePath('/textures/textwood2.jpeg')} className="relative h-[60px] w-[60px] rounded-md overflow-hidden">
                            <Image
                                src="/textures/textwood2.jpeg"
                                alt="texture"
                                fill
                                style={{objectFit: "cover"}}
                            />
                        </div>
                        <div onClick={() => setSelectedTexturePath('/textures/textwood3.jpg')} className="relative h-[60px] w-[60px] rounded-md overflow-hidden">
                            <Image
                                src="/textures/textwood3.jpg"
                                alt="texture"
                                fill
                                style={{objectFit: "cover"}}
                            />
                        </div>
                    </div>
                </div>
                <p className={'w-1/2 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
                    animi aperiam autem cum dolorum eos esse ipsam iste itaque iure labore magni minus molestias odit omnis quibusdam, ratione sapiente ut, voluptatem? Accusamus aspernatur facere nisi pariatur rem totam ut.</p>
            </div>
        </div>
    );
};

export default DesignYourselfSection;
