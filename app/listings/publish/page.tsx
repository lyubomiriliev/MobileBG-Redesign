"use client";

import Button from "@/components/Button";
import React, { useState } from "react";
import GeneralData from "@/components/PublishAd/GeneralData";
import InteriorExterior from "@/components/PublishAd/InteriorExterior";
import Safety from "@/components/PublishAd/Safety";
import Comfort from "@/components/PublishAd/Comfort";
import MultimediaDevices from "@/components/PublishAd/MultimediaDevices";
import AdditionalExtra from "@/components/PublishAd/AdditionalExtra";
import { useRouter } from "next/navigation";
import PublishLayout from "@/components/PublishAd/PublishLayout";

const PublishCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [innerStep, setInnerStep] = useState(1);

  const router = useRouter();

  // useEffect(() => {
  //   if (innerStep <= 6) {
  //     setCurrentStep(1);
  //   } else if (innerStep >= 7 && innerStep <= 9) {
  //     setCurrentStep(2);
  //   } else if (innerStep >= 10) {
  //     setCurrentStep(3);
  //   }
  // }, [innerStep]);

  const handleChangeStep = (index: number) => {
    setCurrentStep(index + 1);
  };

  const handleNextInnerStep = () => {
    if (innerStep === 6) {
      router.push("/listings/publish/upload");
    } else if (innerStep < 7) {
      setInnerStep(innerStep + 1);
    } else if (innerStep === 7) {
      router.push("/listings/publish/review");
    }
  };

  const handlePreviousInnerStep = () => {
    if (innerStep > 1) {
      setInnerStep(innerStep - 1);
    }
  };

  return (
    <PublishLayout
      currentStep={1}
      onBackClick={handlePreviousInnerStep}
      showBackButton={innerStep > 1}
    >
      {innerStep === 1 && <GeneralData />}
      {innerStep === 2 && <InteriorExterior />}
      {innerStep === 3 && <Safety />}
      {innerStep === 4 && <Comfort />}
      {innerStep === 5 && <MultimediaDevices />}
      {innerStep === 6 && <AdditionalExtra />}
      <div onClick={handleNextInnerStep} className="z-50">
        <Button text="ПРОДЪЛЖИ" />
      </div>
    </PublishLayout>
  );
};

export default PublishCarPage;
