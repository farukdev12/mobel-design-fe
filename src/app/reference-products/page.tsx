import React from 'react';
import {galleryItems} from "@/constants/GalleryItems";
import Gallery from "@/app/components/PhotoGallery";

const Page = () => {
    const products = galleryItems
    return (
        <div className={'w-full flex flex-col gap-5 container mx-auto px-5'}>
            <h1 className={'text-3xl text-center mt-10'}>Referans İşlerimiz</h1>
            <Gallery products={products} />
        </div>
    );
};

export default Page;