'use client'
import React, {useState} from 'react';
import ThreeScene from "@/app/(landing)/components/ThreeScene";
import Image from 'next/image'
import useWindowSize from "@/hooks/useWindowSize";

const DesignYourselfSection = () => {
    const [selectedTexturePath, setSelectedTexturePath] = useState('/textures/textwood.jpeg')
    const { width } = useWindowSize()
    return (
        <div className={'flex w-screen h-auto md:h-[70vh] md:py-0 py-6 bg-secondary/25 gap-5'}>
            <div className={'flex w-full flex-col md:flex-row items-center h-full gap-5 container mx-auto px-5'}>
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
                <div className={'w-full h-full flex flex-col gap-5 items-start justify-center'}>
                    <h2 className={'text-2xl font-semibold text-center'}>Yakında Hizmetinizde: Kişiye Özel 3D Mobilya
                        Tasarım Aracı</h2>
                    <p className={'text-sm text-center text-black/70'}>
                        Kişiselleştirilmiş mobilya üretiminde yeni bir dönem başlıyor.
                        Üzerinde çalıştığımız 3D tasarım platformu sayesinde, yaşam alanınıza tam uyan mobilyaları kendi
                        ölçülerinizle tasarlayabilecek, detaylarını dilediğiniz gibi şekillendirebileceksiniz.
                    </p>
                    {
                        width > 1024 && (
                            <>
                                <p className={'text-sm text-center text-black/70'}>
                                    Renk, malzeme ve model seçeneklerini anında değiştirerek, tasarımınızı gerçek zamanlı 3D önizleme ile görebileceksiniz. Böylece üretim öncesinde her ayrıntıyı gözden geçirip, hayalinizdeki mobilyayı tam olarak oluşturma imkânına sahip olacaksınız.
                                </p>
                                <p className={'text-sm text-center text-black/70'}>
                                    Henüz geliştirme aşamasında olan bu sistem, çok yakında hizmete açılacak.
                                    Kusursuz bir tasarım deneyimi için biz çalışmaya devam ediyoruz.
                                </p>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default DesignYourselfSection;
