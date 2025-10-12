import React from 'react';
import Gallery from "@/app/components/PhotoGallery";

const PhotoGallerySection = () => {
    return (
        <div className={'flex flex-col gap-5 items-center mt-10'}>
            <h2 className={'text-3xl font-semibold text-center'}>Tamamlanmis isler</h2>
            <Gallery />
        </div>
    );
};

export default PhotoGallerySection;
