'use client'
import React, {useState} from 'react';
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import {Button} from "@mui/material";

const MdHeader = () => {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<number>(0);
    const [referanceWidthForMenuItems, setReferanceWidthForMenuItems] = useState(0);
    const [itemLeftPosition, setItemLeftPosition] = useState(0);

    const contents = [
        {
            id: 1,
            content:
                <div className={`flex w-full justify-between items-start container mx-auto px-4 ${open ? 'text-white' : 'text-transparent'}`}>
                    <div className={'flex flex-col py-6'}>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Butik Urunler</Link>
                        <p className={'text-sm text-primary-text w-1/2'}>Özenle tasarlanmış, sınırlı sayıda üretilen özel koleksiyon parçalar. Yaşam alanınıza karakter ve özgünlük katacak benzersiz mobilyalar.</p>
                    </div>
                    <div className={'flex flex-col py-6'}>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Ozel Olcu Urunler</Link>
                        <p className={'text-sm text-primary-text w-1/2'}>Mekânınıza ve ihtiyaçlarınıza tam uyum sağlayan, size özel ölçülerde üretilen mobilyalar. Hayalinizdeki tasarım, tam istediğiniz gibi.</p>
                    </div>
                    <div className={'flex flex-col py-6'}>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Kurumsal Cozumler</Link>
                        <p className={'text-sm text-primary-text w-1/2'}>Ofisler, oteller ve ticari alanlar için fonksiyonel ve estetik özel mobilya projeleri. Markanıza özgü, profesyonel ve bütünsel tasarım hizmeti.</p>
                    </div>
                </div>

        },
        {
            id: 2,
            content:
                <div className={`flex w-full h-full justify-between items-center container mx-auto px-4 ${open ? 'text-white' : 'text-transparent'}`}>
                    <div className={'border w-[180px] h-[180px] border-dashed grid grid-cols-2 border-primary-header rounded-md'}>
                        <div className={'border-r border-b border-dashed h-full text-primary-header border-primary-header flex flex-col items-center justify-center'}>
                            <ArchitectureIcon color={'inherit'} className={'!text-4xl'} />
                            <span className={'text-xs'}>Tasarla</span>
                        </div>
                        <div className={'flex flex-col items-center h-full text-primary-header border-b border-dashed border-primary-header justify-center'}>
                            <LocalOfferIcon color={'inherit'} className={'!text-4xl'} />
                            <span className={'text-xs'}>Fiyat Al</span>
                        </div>
                        <div className={'border-r border-dashed h-full text-primary-header border-primary-header flex flex-col items-center justify-center'}>
                            <LocalShippingIcon color={'inherit'} className={'!text-4xl'} />
                            <span className={'text-xs'}>Siparis Ver</span>
                        </div>
                        <div className={'flex flex-col items-center h-full text-primary-header justify-center'}>
                            <MapsHomeWorkIcon color={'inherit'} className={'!text-4xl'} />
                            <span className={'text-xs'}>Teslim Al</span>
                        </div>
                    </div>
                    <p className={'text-sm text-primary-text w-1/3 py-6'}>Hayalinizdeki mobilyayı birkaç adımda kişiselleştirin. Ölçülerinizi, tarzınızı ve malzemenizi seçin; dilediğiniz detayları ekleyin. Size özel bir tasarım deneyimiyle, yaşam alanınıza en uygun ürünü oluşturun. Tasarımınızı tamamlayın, biz gerisini ustalıkla üretelim.</p>
                    <div className={'h-full w-1/4 flex justify-center items-end pb-10'}>
                        <Button variant={'contained'} fullWidth color={'primary'}>Hemen Basla</Button>
                    </div>

                </div>

        },
        {
            id: 3,
            content:
                <div className={`flex w-full justify-between items-start container mx-auto px-4 ${open ? 'text-white' : 'text-transparent'}`}>
                    <div className={'flex flex-col gap-2 py-6'}>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Hakkimizda</Link>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Referanslar</Link>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Kurumsal Cozumler</Link>
                        <Link href={'/'} className={'text-xl text-primary-header'}>Iletisim</Link>
                    </div>
                    <p className={'text-sm text-primary-text w-1/3 py-6'}>1980’den bu yana mobilya sektöründe faaliyet gösteren firmamız, özel ölçü ve butik tasarımlarda uzmanlaşmıştır. Yılların kazandırdığı deneyimle, hem bireysel hem de kurumsal birçok prestijli projeye imza attık. Kaliteli malzeme ve özenli işçilikten ödün vermeden, her müşterimizin hayalindeki mekâna uygun çözümler üretiyoruz. Güvenilirliğimiz ve titiz yaklaşımımızla, yaşam alanlarınıza değer katmaya devam ediyoruz.</p>
                </div>

        }
    ]

    const handleOpenMenu = (_, hasSubMenu: boolean, id: number) => {
        if (hasSubMenu) {
            setOpen(true);
        } else {
            setOpen(false);
        }
        setReferanceWidthForMenuItems(_.target.getBoundingClientRect().width + 20)
        setItemLeftPosition(_.target.offsetLeft - 10)
        setActiveMenu(id)
    }

    const handleCloseMenu = () => {
        setOpen(false);
        setActiveMenu(0)
    }

    return (
        <div className={'header-wrapper border-b border-b-secondary relative w-screen'}>
            <div onMouseLeave={handleCloseMenu} className={`w-full 2xl:px-20 h-[200px] absolute transition-[top] duration-300 ${open ? 'top-[84px] bg-secondary z-50' : 'top-0 bg-transparent z-[-10]'}`}>
                {
                    contents.find(x => x.id === activeMenu)?.content
                }
            </div>
            <div className={'w-full !h-[84px] bg-secondary-back !text-primary-header container mx-auto px-4 flex items-center justify-between'}>
                <h1 className={'text-2xl w-1/4'}>MobelDesign</h1>
                <div className={'h-full relative flex justify-between items-center duration-100 w-2/4 !text-primary-header'}>
                    <div className={`absolute ${open ? 'block' : 'hidden'} h-1/2 duration-200 bg-secondary rounded-lg z-[1]`}
                         style={{width: `${referanceWidthForMenuItems}px`, left: `${itemLeftPosition}px`}}></div>
                    <Link
                        onMouseEnter={(e) => handleOpenMenu(e, false, 0)}
                        href={'/'}
                        className={`text-xl font-medium h-[84px] flex items-center justify-center]`}
                    >
                        Ana Sayfa
                    </Link>
                    <Link
                        onMouseEnter={(e) => handleOpenMenu(e, true, 1)}
                        href={'/'}
                        className={`text-xl font-medium h-[84px] flex items-center justify-center ${activeMenu === 1 && 'text-white z-[3]'}`}
                    >
                        Urunler
                    </Link>
                    <Link
                        onMouseEnter={(e) => handleOpenMenu(e, true, 2)}
                        href={'/'}
                        className={`text-xl font-medium h-[84px] flex items-center justify-center ${activeMenu === 2 && 'text-white z-[3]'}`}
                    >
                        Kendin Tasarla
                    </Link>
                    <Link
                        onMouseEnter={(e) => handleOpenMenu(e, true, 3)}
                        href={'/'}
                        className={`text-xl font-medium h-[84px] flex items-center justify-center ${activeMenu === 3 && 'text-white z-[3]'}`}
                    >
                        Hakkimizda
                    </Link>
                </div>
                <div className={'w-1/4 flex items-center justify-end gap-5'}>
                    <PersonIcon className={'!text-3xl mt-1'} />
                    <ShoppingBagIcon className={'!text-3xl'} />
                </div>
            </div>
        </div>
    );
};

export default MdHeader;