import React from 'react';
import {Avatar} from "@mui/material";

const FeedbacksSection = () => {
    return (
        <div className={'flex flex-col gap-6 items-center mt-10 bg-secondary/25 py-6'}>
            <h2 className={'text-3xl font-semibold text-center'}>Musteri Yorumlari (Ornek)</h2>
            <div className={'w-full h-auto py-10 flex flex-col md:flex-row gap-10 justify-center px-5 container mx-auto'}>
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex items-center gap-2 justify-center md:justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Barış P.</span>
                    </div>
                    <p className={'text-sm w-full text-center'}>Mutfak dolaplarımızı Mobel yaptı, sonuç tam hayal ettiğimiz gibi oldu. Ne eksik, ne fazla. Ölçüler birebir tuttu, işçilik şahane. Gerçekten güvenilir bir ekip!
                    </p>
                </div>
                <div className={'flex flex-col gap-5 mt-0 md:mt-16'}>
                    <div className={'flex items-center gap-2 justify-center md:justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Burak C. - Diagno Lab.Cihazları</span>
                    </div>
                    <p className={'text-sm w-full text-center'}>Ofis mobilyalarımızı yeniledik, Mobel ekibi baştan sona bizimleydi. Fikir verdiler, çizim yaptılar, zamanında teslim ettiler. Şimdi ofise gelen herkes nereden yaptırdığımızı soruyor.</p>
                </div>
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex items-center gap-2 justify-center md:justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Melisa T.</span>
                    </div>
                    <p className={'text-sm w-full text-center'}>“Kendi Tasarla” kısmından TV ünitemi kendim tasarladım. Renk seçmek bile eğlenceliydi. Ürün geldiğinde birebir aynıydı, çok kaliteli.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default FeedbacksSection;
