'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import TestLogo from '@images/test-logo.png'

const brands = [
    { name: 'IKEA', logo: TestLogo },
    { name: 'Vitra', logo: TestLogo },
    { name: 'Enza Home', logo: TestLogo },
    { name: 'Kelebek', logo: TestLogo },
    { name: 'Bellona', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo },
    { name: 'Doğtaş', logo: TestLogo }
]

export default function InfiniteSilder() {
    return (
        <div className="w-full py-8 overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
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
                                className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
