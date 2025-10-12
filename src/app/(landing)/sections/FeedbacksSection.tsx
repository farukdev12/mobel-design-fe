import React from 'react';
import {Avatar} from "@mui/material";

const FeedbacksSection = () => {
    return (
        <div className={'flex flex-col gap-6 items-center mt-10 bg-secondary/25 py-6'}>
            <h2 className={'text-3xl font-semibold text-center'}>Musteri Yorumlari (Ornek)</h2>
            <div className={'w-full h-auto py-10 flex gap-10 justify-center px-5 container mx-auto'}>
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex items-center gap-2 justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Faruk Cakir</span>
                    </div>
                    <p className={'text-sm w-4/5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi ea
                        illum laborum nemo quidem
                        vel. Ab asperiores atque beatae debitis deleniti deserunt eligendi et explicabo facere fuga
                        inventore, nesciunt officia, pariatur, quam recusandae repellat sunt tempore ullam unde
                        veritatis.</p>
                </div>
                <div className={'flex flex-col gap-5 mt-16'}>
                    <div className={'flex items-center gap-2 justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Faruk Cakir</span>
                    </div>
                    <p className={'text-sm w-4/5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi ea
                        illum laborum nemo quidem
                        vel. Ab asperiores atque beatae debitis deleniti deserunt eligendi et explicabo facere fuga
                        inventore, nesciunt officia, pariatur, quam recusandae repellat sunt tempore ullam unde
                        veritatis.</p>
                </div>
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex items-center gap-2 justify-start'}>
                        <Avatar alt={'test'}/>
                        <span className={'text-lg font-semibold'}>Faruk Cakir</span>
                    </div>
                    <p className={'text-sm w-4/5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi ea
                        illum laborum nemo quidem
                        vel. Ab asperiores atque beatae debitis deleniti deserunt eligendi et explicabo facere fuga
                        inventore, nesciunt officia, pariatur, quam recusandae repellat sunt tempore ullam unde
                        veritatis.</p>
                </div>
            </div>
        </div>

    );
};

export default FeedbacksSection;
