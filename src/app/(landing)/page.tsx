import React from 'react';
import WelcomeSection from "@/app/(landing)/sections/WelcomeSection";
import BoutiqueProducts from "@/app/(landing)/sections/BoutiqueProducts";

const Page = () => {
    return (
        <div>
            <WelcomeSection />
            <BoutiqueProducts />
        </div>
    );
};

export default Page;
