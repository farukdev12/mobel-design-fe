import React from 'react';
import corporateSolutionsBanner from '@images/corporate-solutions-baner.jpg'
import Image from "next/image";
import MdContanctForm from "@/app/components/MD-ContanctForm";

const Page = () => {
    return (
        <div className={'w-full h-full flex flex-col gap-4'}>
            <div className="flex md:h-[500px] h-[300px]">
                <Image src={corporateSolutionsBanner} alt={'banner'} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="container mx-auto px-5 flex flex-col gap-3 mt-6">
                <h2 className={'text-xl md:text-3xl font-semibold text-center'}>Kurumsal Çözümler</h2>
                <p className={'text-sm md:text-lg font-normal'}>
                    Mobel, kurumsal projelerde estetik, fonksiyonellik ve dayanıklılığı bir araya getiren profesyonel marangozluk çözümleri sunar.
                    Her kurumun kendi marka kimliğine, işlevsellik ihtiyaçlarına ve mekânsal vizyonuna uygun özgün tasarımlar üretmek; Mobel’in kurumsal hizmet anlayışının temelini oluşturur.
                </p>
                <p className={'text-sm md:text-lg font-normal'}>Kurumsal alanlarda mobilya, dekorasyon ve iç mimari uygulamalar yalnızca bir ihtiyaç değil, markanın kurumsal duruşunu ve kimliğini yansıtan unsurlardır. Bu nedenle Mobel olarak, her projede ölçü, malzeme, renk ve form bütünlüğünü markanın değerleriyle uyumlu biçimde planlıyoruz.
                </p>
                <p className={'text-sm md:text-lg font-normal'}>Yüksek üretim kapasitemiz, modern makine parkurumuz ve deneyimli proje ekibimiz sayesinde, küçük ölçekli işletmelerden büyük kurumsal yapılara kadar farklı büyüklükte projelerde etkin çözümler sunabiliyoruz.
                </p>
                <h3 className={'text-xl md:text-2xl font-medium text-center'}>Kurumsal Çözümler</h3>
                <p className={'text-sm md:text-lg font-normal'}>Mobel olarak geniş bir yelpazede kurumsal çözümler üretiyoruz:
                </p>
                <ul className={'list-disc'}>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Ofis ve çalışma alanları için fonksiyonel, ergonomik ve şık mobilyalar
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Otel, restoran ve kafe projeleri için özel ölçü mobilya ve konsept tasarımlar
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Mağaza ve showroom düzenlemeleri için markaya özgü tasarım ve teşhir mobilyaları
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Eğitim, sağlık ve kamu alanları için dayanıklı, güvenli ve estetik çözümler
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Mimarlık ve iç mimari ofisleriyle iş birlikleri, proje bazlı üretim desteği
                        </p>
                    </li>
                </ul>
                <p className={'text-sm md:text-lg font-normal'}>Her proje, profesyonel proje yöneticilerimiz tarafından detaylı şekilde analiz edilir; üretim öncesinde 3 boyutlu görselleştirme, teknik çizim ve malzeme örnekleriyle onay süreci yürütülür.
                    Bu yaklaşım, iş süreçlerimizin şeffaf, kontrollü ve müşteri memnuniyetine odaklı ilerlemesini sağlar.
                </p>
                <h3 className={'text-xl md:text-2xl font-medium text-center'}>Kurumsal Farkımız</h3>
                <ul className={'list-disc'}>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Özel ölçüye göre üretim – Her kurumun mekânsal yapısına ve konseptine özel tasarım
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Tasarım desteği – İhtiyaca uygun profesyonel çizim ve modelleme hizmeti
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>
                            Zamanında teslim – Proje planlamasına uygun, kontrollü üretim ve montaj süreci
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>
                            Kalite güvencesi – Tüm ürünlerde dayanıklılık, malzeme kalitesi ve uzun ömür garantisi
                        </p>
                    </li>
                    <li>
                        <p className={'text-sm md:text-lg font-normal'}>Kurumsal gizlilik – Proje detaylarının ve marka tasarımlarının gizliliği esastır
                        </p>
                    </li>
                </ul>
                <p className={'text-sm md:text-lg font-normal'}>Her proje, profesyonel proje yöneticilerimiz tarafından detaylı şekilde analiz edilir; üretim öncesinde 3 boyutlu görselleştirme, teknik çizim ve malzeme örnekleriyle onay süreci yürütülür.
                    Mobel, yalnızca üretim yapan bir marangozluk markası değil; kurumların marka değerini güçlendiren bir tasarım ortağıdır.
                    Sürekli gelişen üretim teknolojilerimiz, yenilikçi bakış açımız ve müşteri odaklı yaklaşımımızla, kurumsal iş birliklerinde kaliteyi ve güveni ön planda tutuyoruz.
                </p>
            </div>
            <div className={'w-full flex items-center justify-center py-10 md:px-0 px-5'}>
                <MdContanctForm />
            </div>

        </div>
    );
};

export default Page;