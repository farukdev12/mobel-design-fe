'use client'
import React from 'react';
import Gallery from "@/app/components/PhotoGallery";
import {Button} from "@mui/material";
import {galleryItems} from "@/constants/GalleryItems";
import {useRouter} from "next/navigation";

const PhotoGallerySection = () => {
    const router = useRouter();

    const products = galleryItems.slice(0, 4);
    return (
        <div className={'flex flex-col gap-5 items-center py-10 '}>
            <h2 className={'text-3xl font-semibold text-center'}>Tamamlanmis isler</h2>
            <Gallery products={products} />
            <Button size={'large'} onClick={() => router.push('/reference-products')} variant="contained">Keşfet</Button>
        </div>
    );
};

export default PhotoGallerySection;
