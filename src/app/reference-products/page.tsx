import React from 'react';
import {galleryItems} from "@/constants/GalleryItems";
import Gallery from "@/app/components/PhotoGallery";

const Page = () => {
    const products = galleryItems
    return (
        <div className={'w-full container mx-auto px-5'}>
            <Gallery products={products} />
        </div>
    );
};

export default Page;