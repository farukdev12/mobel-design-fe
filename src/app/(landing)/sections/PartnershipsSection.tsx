import React from 'react';
import InfiniteSilder from "@/app/components/InfiniteSilder";

const PartnershipsSection = () => {
    return (
        <div className={'w-full h-auto bg-transparent flex flex-col gap-10 mt-10'}>
            <h2 className={'text-3xl font-semibold text-center'}>İş Birliklerimiz</h2>
            <InfiniteSilder />
        </div>
    );
};

export default PartnershipsSection;
