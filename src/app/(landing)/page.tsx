import React from 'react';
import WelcomeSection from "@/app/(landing)/sections/WelcomeSection";
import BoutiqueProducts from "@/app/(landing)/sections/BoutiqueProducts";
import DesignYourselfSection from "@/app/(landing)/sections/DesignYourselfSection";

const Page = () => {
    return (
        <div>
            <WelcomeSection />
            <BoutiqueProducts />
            <DesignYourselfSection />
        </div>
    );
};

export default Page;
