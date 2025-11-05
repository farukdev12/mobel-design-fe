import React from 'react';
import aboutUsBanner from '@images/about-us-banner.jpg'
import Image from "next/image";
import MdContanctForm from "@/app/components/MD-ContanctForm";
const Page = () => {
    return (
        <div className={'w-full h-full flex flex-col gap-4'}>
            <div className="flex md:h-[500px] h-[300px]">
                <Image src={aboutUsBanner} alt={'banner'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/*<Image src={aboutUsBanner} alt={'banner'} style={{ width: '100%', maxHeight: '20%', height: '20%', objectFit: 'cover' }} />*/}
            <div className="container mx-auto px-5 flex flex-col gap-2 mt-6">
                <h2 className={'text-xl md:text-3xl font-semibold text-center'}>Kurumsal Çözümler</h2>
                <p className={'text-sm md:text-lg font-normal mt-3'}>Mobel, marangozluk ve mobilya üretim sektöründe yenilikçi tasarım anlayışı, yüksek işçilik kalitesi ve müşteri odaklı hizmet prensipleriyle faaliyet gösteren profesyonel bir markadır. Kuruluşumuzdan bu yana, bireysel ve kurumsal müşterilerimize sunduğumuz özgün tasarımlar, özel ölçü çözümleri ve fonksiyonel mobilyalarla sektörde güvenilir bir konuma ulaşmanın gururunu yaşıyoruz.
                </p>
                <p className={'text-sm md:text-lg font-normal'}>Her yaşam alanının kendine özgü bir kimliği ve ihtiyacı olduğuna inanıyoruz. Bu doğrultuda Mobel olarak; konut, ofis, mağaza, otel ve diğer kurumsal projelerde mekâna özel ölçü, tasarım ve üretim hizmetleri sunuyoruz. Gelişmiş üretim teknolojilerimiz, nitelikli tasarım ekibimiz ve deneyimli ustalarımızla, her projeyi detaylı planlama, doğru malzeme seçimi ve üstün işçilik anlayışıyla hayata geçiriyoruz.
                </p>
                <p className={'text-sm md:text-lg font-normal'}>Mobel, müşterilerine yalnızca bir mobilya ürünü değil, bütünüyle kişiselleştirilmiş bir deneyim sunmayı hedefler. Bu anlayışla geliştirdiğimiz “Kendi Tasarla” sistemi sayesinde kullanıcılar, ölçülerini girip renk, model ve malzeme tercihlerine göre 3 boyutlu ortamda kendi tasarımlarını oluşturabilmektedir. Böylece üretim süreci, müşterilerimizin hayal gücüyle birleşerek benzersiz sonuçlar ortaya çıkarır.</p>
                <p className={'text-sm md:text-lg font-normal'}>Kurumsal vizyonumuzun temelinde, estetik, dayanıklılık ve sürdürülebilirlik kavramları yer alır. Üretimde çevreye duyarlı malzemeler kullanarak, hem doğaya hem de insan sağlığına saygılı bir yaklaşım benimsiyoruz.
                    Mobel olarak kalite standartlarımızı sürekli geliştirmeye, sektördeki yenilikleri takip ederek modern çizgilerle geleneksel marangozluk ustalığını buluşturmaya özen gösteriyoruz.
                </p>
                <p className={'text-sm md:text-lg font-normal'}>Her biri alanında uzman tasarımcı ve ustalardan oluşan ekibimiz, projelerin her aşamasında titizlikle çalışarak müşteri memnuniyetini en üst seviyede tutar. İster bireysel yaşam alanları, ister kurumsal projeler olsun; Mobel’in önceliği estetik, fonksiyonel ve uzun ömürlü çözümler üretmektir.</p>
                <p className={'text-sm md:text-lg font-normal'}>Bugün Mobel, sadece bir marangoz atölyesi değil; tasarımı, teknolojiyi ve sanatı bir araya getiren modern bir üretim markası olarak faaliyet göstermektedir.
                    Her projemizde, işimizin merkezine kaliteyi, güveni ve müşteri memnuniyetini yerleştiriyoruz.
                </p>
            </div>
            <div className={'w-full flex items-center justify-center py-10 md:px-0 px-5'}>
                <MdContanctForm />
            </div>

        </div>
    );
};

export default Page;