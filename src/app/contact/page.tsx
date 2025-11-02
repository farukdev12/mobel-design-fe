import React from 'react';
import MDLocationComponent from "@/app/components/MD-LocationComponent";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import MdContanctForm from "@/app/components/MD-ContanctForm";

const Page = () => {
    return (
        <div className={'w-full flex flex-col gap-8'}>
          <MDLocationComponent />
            <div className={'w-full flex md:flex-row flex-col items-center justify-between gap-6 container mx-auto px-5 my-10'}>
                <div className={'md:w-1/2 w-full md:mb-0 mb-5 flex flex-col justify-center items-start gap-5'}>
                    <div className={'flex justify-start items-center gap-4'}>
                        <LocationPinIcon />
                        <a href={'https://www.google.com/maps/place/Ramazano%C4%9Flu,+Y%C4%B1ld%C4%B1r%C4%B1m+Sk.+No:2,+34906+Pendik%2F%C4%B0stanbul/@40.9013713,29.2957495,215m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x14cadb5148718587:0xc8b403fe5dab8fb9!2sMobel+Mobilya!8m2!3d40.9014914!4d29.2964662!16s%2Fg%2F11h1dgxzrv!3m5!1s0x14cadbb6b1e7cd6b:0x1426d079b494d23b!8m2!3d40.9013703!4d29.2963932!16s%2Fg%2F11csfp8npm?hl=tr&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D'} className={'text-lg font-semibold opacity-50'}>
                            Ramazanoğlu, Yıldırım Sk. No:2, 34906 <br/> Pendik/İstanbul
                        </a>
                    </div>
                    <div className={'flex justify-start items-center gap-4'}>
                        <CallIcon />
                        <span className={'text-lg font-semibold opacity-50'}>
                            +90 536 352 7938
                        </span>
                    </div>
                    <div className={'flex justify-start items-center gap-4'}>
                        <EmailIcon />
                        <a href={'mailTo:faruk@mobelmobilya.com'} className={'text-lg font-semibold opacity-50'}>
                            info@mobelmobilya.com
                        </a>
                    </div>
                    <div className={'flex justify-start items-center gap-4'}>
                        <InstagramIcon />
                        <a href={'https://www.instagram.com/mobel.mobilya/'} className={'text-lg font-semibold opacity-50'}>
                            @mobel.mobilya
                        </a>
                    </div>
                </div>
                <MdContanctForm />
            </div>
        </div>
    );
};

export default Page;