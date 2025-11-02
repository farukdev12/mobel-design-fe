'use client'
import React from 'react';
import '../../globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Slider1 from '@images/landing-slider1.jpg'
import Slider2 from '@images/landing-slider2.jpg'
import Slider3 from '@images/landing-slider3.jpg'
import {SwiperSlide, Swiper} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from "next/image";
const WelcomeSection = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className={'w-full h-[calc(100vh-84px)]'}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                pagination={{
                    enabled: true,
                    clickable: true,
                }}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={'w-full h-auto'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={Slider1} fill className="object-cover" alt="landing-slider-1" />
                        <div className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center justify-center gap-10'}>
                            <h1 className={'text-3xl text-white'}>Lorem ipsum dolor sit.</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur debitis laborum nisi quae repellendus voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={Slider2} fill className="object-cover" alt="landing-slider-2"/>
                        <div
                            className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center justify-center gap-10'}>
                            <h1 className={'text-3xl text-white'}>Lorem ipsum dolor sit.</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center'}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aspernatur debitis laborum nisi quae repellendus voluptas?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={Slider3} fill className="object-cover" alt="landing-slider-3"/>
                        <div
                            className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center justify-center gap-10'}>
                            <h1 className={'text-3xl text-white'}>Lorem ipsum dolor sit.</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center'}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aspernatur debitis laborum nisi quae repellendus voluptas?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default WelcomeSection;
