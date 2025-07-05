import React from 'react';
import Image from "next/image";

export interface IProductCard {
    image: any;
    productName: string;
    productDescription: string;
    price: number;
}

const ProductCard:React.FC<IProductCard> = (
    {
        image,
        productName,
        productDescription,
        price,
    }
) => {
    return (
        <div className={'flex flex-col items-start border border-primary/50 gap-5 rounded-lg h-full'}>
            <div className={'relative w-full h-2/3'}>
                <Image src={image} fill className="object-cover" alt="landing-slider-1"/>
            </div>
            <span className={'px-5 text-xl text-primary-header'}>{productName}</span>
            <p className={'px-5 text-sm text-primary-text'}>{productDescription}</p>
            <span className={'px-5 text-sm pb-3'}>{price}₺</span>
        </div>
    );
};

export default ProductCard;
