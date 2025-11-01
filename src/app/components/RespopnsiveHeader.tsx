'use client'
import React, {useEffect, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ResponsiveLogo from "@images/brand-logo.svg";
import Image from "next/image";
import {useRouter } from "next/navigation";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import MDButton from "@/app/components/MD-Button";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import LoginIcon from "@mui/icons-material/Login";

const ResponsiveHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const router = useRouter();
    const handleRoute = (route: string) => {
        setIsMenuOpen(false)
        setIsProfileMenuOpen(false);
        router.push(route)
    }

    useEffect(() => {
        if (isMenuOpen || isProfileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen, isProfileMenuOpen])
    return (
        <div className={'relative'}>
            <div className={'w-full flex justify-between px-5 pt-2 '}>
                <div className={'flex gap-3 items-center text-black'}>
                    <MenuIcon fontSize={'large'} color="inherit" onClick={() => setIsMenuOpen(true)}/>
                    {/*<div className={'w-[50px] h-[50px]'}>*/}
                    {/*    <Image src={ResponsiveLogo} alt={'logo'} onClick={() => handleRoute('/')}/>*/}
                    {/*</div>*/}
                    <Image src={ResponsiveLogo} alt={'logo'} onClick={() => handleRoute('/')} style={{width:'60px', height:'60px'}} />
                </div>
                {/*<div className={'flex gap-4 items-center'}>*/}
                {/*    <MDButton*/}
                {/*        onClick={() => handleRoute('/auth')}*/}
                {/*        startIcon={<LoginIcon/>}*/}
                {/*        size="small"*/}
                {/*        isLinearBg={false}*/}
                {/*        className={'!px-5'}*/}
                {/*        text="Kayıt Ol"*/}
                {/*        color="white"*/}
                {/*        extraPadding={false}*/}
                {/*        textColor="#000000"*/}
                {/*    />*/}
                {/*    <Link className="text-sm" href="/auth/login">Giriş Yap</Link>*/}
                {/*</div>*/}
            </div>
            <div
                className={`w-screen h-screen bg-black top-0 ${isMenuOpen ? 'left-0' : '-left-full'} z-20 fixed duration-300`}>
                <div className={'w-full h-full flex flex-col justify-between gap-5 px-5 pt-5 pb-10'}>
                    <div className={'max-h-4/5 overflow-y-scroll sm:overflow-y-hidden custom-scrollbar'}>
                        <div className={'w-full flex justify-end'}>
                            <CloseIcon className={'text-white'} onClick={() => setIsMenuOpen(false)}/>
                        </div>
                        <ul>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'} onClick={() => handleRoute('/')}>Ana Sayfa</span>
                            </li>
                            <li>
                                <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className={'!shadow-none !border-t-0 !text-white !px-0 text-xl !justify-start'}
                                        sx={{
                                            '& .MuiAccordionSummary-expandIconWrapper': {
                                                color: 'white',
                                            },
                                            '& .MuiAccordionSummary-content': {
                                                margin: 0,
                                                maxWidth: 'fit-content',
                                            }
                                        }}
                                    >
                                        <span>Hakkımızda</span>
                                    </AccordionSummary>
                                    <AccordionDetails className={'!pl-0'}>
                                        <ul className={'flex flex-col gap-1 text-white'}>
                                            <li className={'text-xl font-light opacity-65'}>
                                                <span className={'text-base text-white'}
                                                      onClick={() => handleRoute('/about#main-subjects')}>Girişimcilik Ekosistemi</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                                <span className={'text-base text-white'}
                                                      onClick={() => handleRoute('/about#our-services')}>StartupCentrum Kitle Fonlama Platformu</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                                <span className={'text-base text-white'}
                                                      onClick={() => handleRoute('/about#our-services')}>StartupCentrum Alpha GSYF</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                                <span className={'text-base text-white'}
                                                      onClick={() => handleRoute('/about#our-services')}>StartupCentrum Melek Yatırım Ağı</span>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className={'!shadow-none !border-t-0 !text-white !px-0 text-xl !justify-start'}
                                        sx={{
                                            '& .MuiAccordionSummary-expandIconWrapper': {
                                                color: 'white',
                                            },
                                            '& .MuiAccordionSummary-content': {
                                                margin: 0,
                                                maxWidth: 'fit-content',
                                            }
                                        }}
                                    >
                                        <span>Nasıl Çalışır?</span>
                                    </AccordionSummary>
                                    <AccordionDetails className={'!pl-0'}>
                                        <ul className={'flex flex-col gap-1 text-white'}>
                                            <li className={'text-xl font-light opacity-65'}>
                                            <span className={'text-base text-white'}
                                                  onClick={() => handleRoute('/how-it-works')}>Yatırımcı</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                            <span className={'text-base text-white'}
                                                  onClick={() => handleRoute('/how-it-works')}>Girişimci</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                            <span className={'text-base text-white'}
                                                  onClick={() => handleRoute('/how-it-works')}>Nasıl Daha Fazla Kişiye Ulaşabilirsiniz?</span>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/dictionary')}>Sözlük</span>
                            </li>
                            <li>
                                <Accordion className={'!bg-transparent !shadow-none !border-t-0'}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={'inherit'}/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className={'!shadow-none !border-t-0 !text-white !px-0 text-xl !justify-start'}
                                        sx={{
                                            '& .MuiAccordionSummary-expandIconWrapper': {
                                                color: 'white',
                                            },
                                            '& .MuiAccordionSummary-content': {
                                                margin: 0,
                                                maxWidth: 'fit-content',
                                            }
                                        }}
                                    >
                                        <span>SSS</span>
                                    </AccordionSummary>
                                    <AccordionDetails className={'!pl-0'}>
                                        <ul className={'flex flex-col gap-1 text-white'}>
                                            <li className={'text-xl font-light opacity-65'}>
                                            <span className={'text-base text-white'}
                                                  onClick={() => handleRoute('/faq')}>Yatırımcı</span>
                                            </li>
                                            <li className={'text-xl font-light opacity-65'}>
                                            <span className={'text-base text-white'}
                                                  onClick={() => handleRoute('/faq/entrepreneur')}>Girişimci</span>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                        </ul>
                    </div>
                    <MDButton fullWidth className={'mt-auto'} isLinearBg={true} text={'Yatırım Yap'} onClick={() => handleRoute('/')}/>
                </div>
            </div>
            <div
                className={`w-screen h-screen bg-black top-0 ${isProfileMenuOpen ? 'right-0' : '-right-full'} z-20 fixed duration-300`}>
                <div className={'w-full h-full flex flex-col justify-between gap-5 px-5 pt-5 pb-20'}>
                    <div className={'max-h-4/5 overflow-y-scroll sm:overflow-y-hidden'}>
                        <div className={'w-full flex justify-end'}>
                            <CloseIcon onClick={() => setIsProfileMenuOpen(false)}/>
                        </div>
                        <ul>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile')}>Profilim</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile/privacy-notification-settings')}>Gizlilik & Bildirim Ayarlarım</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'} onClick={() => handleRoute('/profile/password')}>Şifre İşlemlerim</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile/account-logins')}>Hesap Girişlerim</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile/delete-account')}>Hesabımı Silmek İstiyorum</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile/invests')}>Yatırımlarım</span>
                            </li>
                            <li className={'!h-[48px] flex flex-col justify-center'}>
                                <span className={'text-xl text-white'}
                                      onClick={() => handleRoute('/profile/campaigns')}>Girişimlerim</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveHeader;
