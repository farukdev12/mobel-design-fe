'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import TestLogo from '@images/test-logo.png'
import ReferenceLogo from '@images/ref-logo-1.jpg';
import ReferenceLogo2 from '@images/ref-logo-2.png';
import ReferenceLogo3 from '@images/ref-logo-3.png';
import ReferenceLogo4 from '@images/ref-logo-4.png';
import ReferenceLogo5 from '@images/ref-logo-5.png';
import ReferenceLogo6 from '@images/ref-logo-6.jpg';
import ReferenceLogo7 from '@images/ref-logo-7.jpg';
import ReferenceLogo8 from '@images/ref-logo-8.png';
import ReferenceLogo9 from '@images/ref-logo-9.jpg';

const brands = [
    { name: 'Gusto Reklam', logo: ReferenceLogo },
    { name: 'Datum Mimarlik', logo: ReferenceLogo2 },
    { name: 'Onnovit', logo: ReferenceLogo3 },
    { name: 'Cam Fuzyon Sanat Evi', logo: ReferenceLogo4 },
    { name: 'Ozkartal surucu kursu', logo: ReferenceLogo5 },
    { name: 'INNOPACK', logo: ReferenceLogo6 },
    { name: 'Akinlab', logo: ReferenceLogo7 },
    { name: 'DIAGNOLAB', logo: ReferenceLogo8 },
    { name: 'Standart T.I.M', logo: ReferenceLogo9 }
]

export default function InfiniteSilder() {
    return (
        <div className="w-full py-8 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                allowTouchMove={false}
                className="brand-swiper"
            >
                {brands.map((brand, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex items-center justify-center">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                className="opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                                style={{width: '200px'}}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
