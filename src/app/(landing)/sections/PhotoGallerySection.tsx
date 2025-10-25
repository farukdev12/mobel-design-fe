import React from 'react';
import Gallery from "@/app/components/PhotoGallery";
import {Button} from "@mui/material";

const PhotoGallerySection = () => {
    return (
        <div className={'flex flex-col gap-5 items-center py-10 '}>
            <h2 className={'text-3xl font-semibold text-center'}>Tamamlanmis isler</h2>
            <Gallery />
            <Button size={'large'} variant="contained">Keşfet</Button>
        </div>
    );
};

export default PhotoGallerySection;
