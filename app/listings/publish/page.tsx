"use client";

import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import GeneralData from "@/components/PublishAd/GeneralData";
import InteriorExterior from "@/components/PublishAd/InteriorExterior";
import Safety from "@/components/PublishAd/Safety";
import Comfort from "@/components/PublishAd/Comfort";
import MultimediaDevices from "@/components/PublishAd/MultimediaDevices";
import AdditionalExtra from "@/components/PublishAd/AdditionalExtra";
import { useRouter } from "next/navigation";
import PublishLayout from "@/components/PublishAd/PublishLayout";

const PublishCarPage = () => {
  const [innerStep, setInnerStep] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("innerStep") || "1", 10);
    }
    return 1;
  });

  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("innerStep", innerStep.toString());
  }, [innerStep]);

  const handleNextInnerStep = () => {
    if (innerStep === 6) {
      router.push("/listings/publish/upload");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (innerStep < 7) {
      setInnerStep(innerStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div
        onClick={handleNextInnerStep}
        className="w-full flex justify-center items-center z-50"
      >
        <div className="w-2/4 lg:w-1/3 py-4">
          <Button text="ПРОДЪЛЖИ" />
        </div>
      </div>
    </PublishLayout>
  );
};

export default PublishCarPage;
