"use client";

import React, { useState } from "react";
import {Backdrop} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import X from '@mui/icons-material/Close';
import { Navigation} from "swiper/modules";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Product {
    id: number;
    title: string;
    cover: string;
    images: string[];
}

const products: Product[] = [
    {
        id: 1,
        title: "El Yapımı Seramik Kupa",
        cover: "/images/landing-slider1.jpg",
        images: [
            "/images/landing-slider2.jpg",
            "/images/landing-slider3.jpg",
            "/images/landing-slider1.jpg"
        ],
    },
    {
        id: 2,
        title: "Ahşap Masa Lambası",
        cover: "/images/landing-slider2.jpg",
        images: [
            "/images/landing-slider1.jpg",
            "/images/landing-slider3.jpg",
            "/images/landing-slider2.jpg"
        ],
    },
    {
        id: 3,
        title: "Ahşap Masa Lambası",
        cover: "/images/landing-slider2.jpg",
        images: [
            "/images/landing-slider1.jpg",
            "/images/landing-slider3.jpg",
            "/images/landing-slider2.jpg"
        ],
    },
    {
        id: 4,
        title: "Ahşap Masa Lambası",
        cover: "/images/landing-slider2.jpg",
        images: [
            "/images/landing-slider1.jpg",
            "/images/landing-slider3.jpg",
            "/images/landing-slider2.jpg"
        ],
    },
];

export default function Gallery() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Product | null>(null);
    const [activeSlideInside, setActiveSlideInside] = useState(0)

    const handleOpen = (product: Product) => {
        setSelected(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelected(null);
    };

    return (
        <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    onClick={() => handleOpen(product)}
                    className="cursor-pointer group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition"
                >
                    <img
                        src={product.cover}
                        alt={product.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/40 text-white text-center p-2 text-sm">
                        {product.title}
                    </div>
                </div>
            ))}
            <Backdrop
                sx={(theme) => ({color: '#fff', zIndex: theme.zIndex.drawer + 1})}
                open={open}
            >
                <div className={'w-full h-full items-center justify-center flex flex-col container mx-auto px-10 relative'}>
                    <X className={'absolute top-10 -right-2 text-5xl cursor-pointer'} color={'inherit'} onClick={handleClose} />
                    <div className={'flex items-center justify-center gap-5 w-full h-1/2'}>
                        <NavigateBeforeIcon className={'swiper-button-prev-custom !text-5xl'} color={'inherit'} />
                        <Swiper
                            modules={[Navigation]}
                            className={'w-2/3 h-full py-10'}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{
                                enabled: true,
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }}
                            // onSlideChange={(e) => console.log('slide change', e)}
                            onSlideChange={(e) => {setActiveSlideInside(e.activeIndex)}}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                selected?.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image}
                                            alt={`${selected?.title}-${index}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition"
                                        />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                        <NavigateNextIcon className={'swiper-button-next-custom !text-5xl'} color={'inherit'}/>
                    </div>
                    <div className={'w-2/3 h-[200px] flex gap-1 bg-white'}>
                        {
                            selected?.images.map((image, index) => (
                                <div className={`w-1/4 p-2 my-2 mx-2 rounded-lg transition ${index === activeSlideInside ? 'border border-primary' : ''}`} key={index}>
                                    <img
                                        src={image}
                                        alt={`${selected?.title}-${index}`}
                                        className={`w-full h-full object-cover group-hover:scale-105`}
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </Backdrop>
        </div>
    );
}
