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
                        <div className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center gap-4'}>
                            <h1 className={'text-3xl text-white'}>Özel Ölçü ve Çizim Hizmetleri</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center mt-6'}>Mobel, yaşam alanlarınıza tam uyum sağlayan özel ölçü mobilya ve kişiye özel marangozluk çözümleri sunar. Her projemiz, profesyonel çizim ve tasarım ekibimizin hazırladığı teknik ölçülere göre titizlikle planlanır.
                                Ev, ofis veya kurumsal alan fark etmeksizin; Mobel, işlevsel, estetik ve uzun ömürlü tasarımlar üretir.
                                Hayalinizdeki mobilyayı, tam ölçüsünde gerçeğe dönüştürün.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={Slider2} fill className="object-cover" alt="landing-slider-2"/>
                        <div
                            className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center gap-10'}>
                            <h1 className={'text-3xl text-white'}>Kendi Tasarımını Oluştur – 3 Boyutlu Tasarım Aracı</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center'}>Mobel farkıyla artık mobilyanızı kendiniz tasarlayabilirsiniz.
                                Web sitemizdeki “Kendi Tasarla” bölümü üzerinden ölçülerinizi girip, renk ve malzeme seçeneklerini belirleyerek 3 boyutlu ortamda kişisel tasarımınızı oluşturabilirsiniz.
                                Bu sistem, kullanıcıya kolaylık ve özgürlük sunarken, tasarım sürecine aktif olarak katılmanızı sağlar.  Mobel ile kendi stilinizi oluşturun, özgün bir mobilyaya sahip olun.

                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={'w-full'}>
                    <div className={'relative w-full h-full'}>
                        <Image src={Slider3} fill className="object-cover" alt="landing-slider-3"/>
                        <div
                            className={'absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white flex flex-col items-center justify-center justify-center gap-10'}>
                            <h1 className={'text-3xl text-white'}> Hakkımızda.</h1>
                            <p className={'text-sm font-light md:w-1/2 w-full md:px-0 px-5 text-center'}>Mobel, özel ölçü mobilya üretimi ve kurumsal marangozluk alanında faaliyet gösteren profesyonel bir firmadır.
                                Yılların deneyimiyle, bireysel ve kurumsal projelerde estetik, dayanıklılık ve kaliteyi bir araya getiriyoruz.
                                Modern üretim teknikleri, yenilikçi tasarım anlayışı ve müşteri memnuniyetine verdiğimiz önemle fark yaratıyoruz. Mobel – Mekânınıza değer katan tasarımlar</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default WelcomeSection;
