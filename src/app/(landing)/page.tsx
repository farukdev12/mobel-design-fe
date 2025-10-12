import React from 'react';
import WelcomeSection from "@/app/(landing)/sections/WelcomeSection";
import BoutiqueProducts from "@/app/(landing)/sections/BoutiqueProducts";
import DesignYourselfSection from "@/app/(landing)/sections/DesignYourselfSection";
import PartnershipsSection from "@/app/(landing)/sections/PartnershipsSection";
import FeedbacksSection from "@/app/(landing)/sections/FeedbacksSection";
import PhotoGallerySection from "@/app/(landing)/sections/PhotoGallerySection";

const Page = () => {
    return (
        <div>
            <WelcomeSection />
            <BoutiqueProducts />
            <DesignYourselfSection />
            <PartnershipsSection />
            <FeedbacksSection />
            <PhotoGallerySection />
        </div>
    );
};

export default Page;
