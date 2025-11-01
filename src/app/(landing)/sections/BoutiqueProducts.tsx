'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Image from "next/image";
import product1 from "@images/product-exam2.png";
import product2 from "@images/product-exam-3.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ProductCard from "@/app/components/ProductCard";
const BoutiqueProducts = () => {
    return (
        <div className={'container mx-auto px-5 mt-10 flex flex-col gap-10 h-[70vh]'}>
            <h1 className={'text-3xl font-semibold text-primary-header'}>Butik Ürünler</h1>
            <Swiper
                modules={[Navigation, Autoplay]}
                className={'w-full h-full'}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                spaceBetween={50}
                navigation={{enabled: true, nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom'}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product1} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product2} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product1} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product2} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product1} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product2} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product1} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>
                <SwiperSlide className={'w-full h-full'}>
                    <ProductCard image={product2} productName={'Ornek Urun 1'} productDescription={'Lorem ipsum dolor sit amet.'} price={300} />
                </SwiperSlide>

            </Swiper>
            <div className={'flex w-full items-center justify-center text-5xl text-secondary'}>
                <NavigateBeforeIcon className={'swiper-button-prev-custom'} color={'inherit'} fontSize={'inherit'}/>
                <NavigateNextIcon className={'swiper-button-next-custom'} color={'inherit'} fontSize={'inherit'}/>
            </div>
        </div>
    );
};

export default BoutiqueProducts;
