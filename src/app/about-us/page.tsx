import React from 'react';
import aboutUsBanner from '@images/about-us-banner.jpg'
import Image from "next/image";
import MdContanctForm from "@/app/components/MD-ContanctForm";
const Page = () => {
    return (
        <div className={'w-full h-full flex flex-col gap-4'}>
            {/*<div className="container mx-auto px-5">*/}
            {/*    <Image src={aboutUsBanner} alt={'banner'} style={{ width: '100%', height: '40%', objectFit: 'cover' }} />*/}
            {/*</div>*/}
            <Image src={aboutUsBanner} alt={'banner'} style={{ width: '100%', height: '40%', objectFit: 'cover' }} />
            <div className="container mx-auto px-5 flex flex-col gap-3 mt-6">
                <h2 className={'text-3xl font-semibold text-center'}>Hakkmızda</h2>
                <p className={'text-lg font-normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet aspernatur autem consequatur deleniti dolore dolorum earum excepturi facere harum labore laborum minima minus nesciunt nisi, nostrum officia possimus quae quidem repellat rerum saepe sed sequi soluta tempora voluptatem voluptatibus! Ad animi asperiores commodi, est fugit harum illum incidunt iure libero molestias nam natus nesciunt odio omnis quam quis repellendus, repudiandae sequi tempora vitae. A aliquam architecto aut commodi esse exercitationem expedita facilis id incidunt laboriosam laborum, neque placeat possimus quis sint sunt veritatis vero! Beatae inventore molestias officiis quod. Adipisci asperiores consequatur fuga hic illum officia placeat voluptate.</p>
                <p className={'text-lg font-normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet aspernatur autem consequatur deleniti dolore dolorum earum excepturi facere harum labore laborum minima minus nesciunt nisi, nostrum officia possimus quae quidem repellat rerum saepe sed sequi soluta tempora voluptatem voluptatibus! Ad animi asperiores commodi, est fugit harum illum incidunt iure libero molestias nam natus nesciunt odio omnis quam quis repellendus, repudiandae sequi tempora vitae. A aliquam architecto aut commodi esse exercitationem expedita facilis id incidunt laboriosam laborum, neque placeat possimus quis sint sunt veritatis vero! Beatae inventore molestias officiis quod. Adipisci asperiores consequatur fuga hic illum officia placeat voluptate.</p>
            </div>
            <div className={'w-full flex items-center justify-center py-10'}>
                <MdContanctForm />
            </div>

        </div>
    );
};

export default Page;