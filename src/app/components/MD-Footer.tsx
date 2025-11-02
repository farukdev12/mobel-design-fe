'use client'
import React from 'react';
import brandLogo from '@images/brand-logo.svg'
import Image from "next/image";
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export interface IFooterProps {
    mode?: 'white' | 'dark'
}

const MDFooter: React.FC<IFooterProps> = (
    {
    }
) => {
    const { width } = useWindowSize();
    return (
        <div className={`w-screen max-w-screen h-auto bg-primary text-white`}>
            <div  className={`sm:h-[420px] h-auto w-full sm:px-20 px-5 flex flex-col md:flex-row gap-10 items-start md:items-start pb-10 sm:pt-20 pt-10`}>
                <div className={'flex flex-col gap-4 lg:w-1/5 sm:px-0 px-5'}>
                    <Image src={brandLogo} width={160} alt="logo"/>
                    <div className={'flex flex-col w-full gap-2'}>
                        <div className={'flex gap-3 items-center justify-start text-base'}>
                            <LocationOnIcon fontSize={'inherit'} />
                            <span className={'text-sm'}>Ramazanoğlu, Yıldırım Sk. No:2, 34906 <br/> Pendik/İstanbul</span>
                        </div>
                        <div className={'flex gap-3 items-center justify-start text-base'}>
                            <EmailIcon fontSize={'inherit'}/>
                            <a href={'mailto:info@mobelmobilya.com'} className={'text-sm'}>info@mobelmobilya.com</a>
                        </div>
                    </div>
                    {/*<p className={'text-sm font-light opacity-65 hidden md:block'}></p>*/}
                    <div className={'flex gap-4 items-start mt-7'}>
                        <a href={'https://www.instagram.com/mobel.mobilya/'} target={'_blank'} className={'w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0'}>
                            <InstagramIcon className={'text-black'}/>
                        </a>
                    </div>
                </div>
                { width >= 1110 ? (
                        <>
                            <div className={'flex flex-col gap-4 lg:w-1/5'}>
                                <h3 className={'text-lg font-semibold'}>Ürünler</h3>
                                <ul className={'flex flex-col gap-3'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/boutique-products'}>Butik Ürünler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Özel Ölçü Ürünler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/corporate-solutions'}>Kurumsal Cözümler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Kendin Tasarla</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={'flex flex-col gap-4 lg:w-1/5'}>
                                <h3 className={'text-lg font-semibold'}>Politikalar ve Güvenlik</h3>
                                <ul className={'flex flex-col gap-3'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Bilgi Güvenliği Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Çerez Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Kalite Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>KVKK ile ilgili Bilgilendirme </Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Kişisel Verilerin Korunması Politikası</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={'flex flex-col gap-4 lg:w-1/5'}>
                                <h3 className={'text-lg font-semibold'}>Üyelik ve Sözleşmeler</h3>
                                <ul className={'flex flex-col gap-3'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Üyelik Sözleşmesi</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={'flex flex-col gap-4 lg:w-1/5'}>
                                <h3 className={'text-lg font-semibold'}>Hakkımızda</h3>
                                <ul className={'flex flex-col gap-3'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/contact'}>İletişim</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/about-us'}>Biz Kimiz?</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/reference-products'}>Referans Projeler</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) :
                    <div className={'flex flex-col w-full'}>
                        <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className={'!shadow-none !border-t-0 !text-white'}
                                sx={{
                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        color: 'white'
                                    }
                                }}
                            >
                                <span>Ürünler</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={'flex flex-col gap-3 text-white'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/boutique-products'}>Butik Ürünler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Özel Ölçü Ürünler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/corporate-solutions'}>Kurumsal Cözümler</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Kendin Tasarla</Link>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className={'!shadow-none !border-t-0 !text-white'}
                                sx={{
                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        color: 'white'
                                    }
                                }}
                            >
                                <span>Politikalar ve Güvenlik</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={'flex flex-col gap-3 text-white'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Bilgi Güvenliği
                                            Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Çerez Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>Kalite Politikası</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>KVKK ile ilgili Bilgilendirme </Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/'}>KVKK ve Aydınlatma Metni</Link>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                className={'!shadow-none !border-t-0 !text-white'}
                                sx={{
                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        color: 'white'
                                    }
                                }}
                            >
                                <span>Üyelik ve Sözleşmeler</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={'flex flex-col gap-3 text-white'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/agreements/member-agreement'}>Üyelik Sözleşmesi</Link>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className={'!shadow-none !border-t-0 !text-white'}
                                sx={{
                                    '& .MuiAccordionSummary-expandIconWrapper': {
                                        color: 'white'
                                    }
                                }}
                            >
                                <span>Hakkımızda</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className={'flex flex-col gap-3 text-white'}>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/contact'}>İletişim</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/about-us'}>Biz Kimiz?</Link>
                                    </li>
                                    <li className={'text-xs font-light opacity-65'}>
                                        <Link href={'/reference-products'}>Referans Projeler</Link>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                }
            </div>
        </div>
    );
};

export default MDFooter;

