"use client";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import GeneralData from "@/components/PublishAd/GeneralData";
import InteriorExterior from "@/components/PublishAd/InteriorExterior";
import Safety from "@/components/PublishAd/Safety";
import Comfort from "@/components/PublishAd/Comfort";
import MultimediaDevices from "@/components/PublishAd/MultimediaDevices";
import AdditionalExtra from "@/components/PublishAd/AdditionalExtra";
import ImageVideoUpload from "@/components/PublishAd/ImageVideoUpload";

const PublishCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [innerStep, setInnerStep] = useState(1);

  useEffect(() => {
    if (innerStep <= 6) {
      setCurrentStep(1);
    }

    if (innerStep >= 7) {
      setCurrentStep(2);
    }

    if (innerStep >= 10) {
      setCurrentStep(3);
    }
  }, [innerStep]);

  const handleChangeStep = (index: number) => {
    setCurrentStep(index + 1);
  };

  const handleNextInnerStep = () => {
    if (innerStep <= 9) {
      setInnerStep(innerStep + 1);
    }
  };

  const handlePreviousInnerStep = () => {
    if (innerStep >= 2) {
      setInnerStep(innerStep - 1);
    }
  };

  const steps = [
    "Информация за автомобила",
    "Добавяне на снимки и видео",
    "Финализиране и публикуване",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 lg:px-0 mt-32">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center py-2 px-4 rounded-md ${
              currentStep === index + 1 ? "text-mobilePrimary" : "text-gray-600"
            }`}
            onClick={() => handleChangeStep(index)}
          >
            <span className="font-bold text-xl uppercase">{`Стъпка ${
              index + 1
            }`}</span>
            <p className="text-base mt-1">{step}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl uppercase text-mobilePrimary font-bold mb-4 text-center">
        Добавяне на обява
      </h2>
      {/* Publish Form content */}
      <div className="bg-white shadow-lg border-[1px] border-slate-200 mb-20 min-h-screen rounded-lg p-6 pt-10 flex flex-col justify-center items-center relative overflow-hidden">
        {innerStep >= 2 && (
          <div
            onClick={handlePreviousInnerStep}
            className="flex items-center gap-2 cursor-pointer absolute left-2 top-2 lg:left-6 lg:top-6"
          >
            <img src="/images/backArrow.svg" className="w-6" alt="" />
            <p>Назад</p>
          </div>
        )}
        {innerStep === 1 && (
          <img
            src="/images/mbCar.webp"
            alt="CarBG"
            className="w-2/3 object-cover absolute -right-24 top-24 opacity-50 hidden lg:flex"
          />
        )}
        {innerStep === 1 && <GeneralData />}
        {innerStep === 2 && <InteriorExterior />}
        {innerStep === 3 && <Safety />}
        {innerStep === 4 && <Comfort />}
        {innerStep === 5 && <MultimediaDevices />}
        {innerStep === 6 && <AdditionalExtra />}
        {innerStep === 7 && <ImageVideoUpload />}
        <div className="z-50">
          <Button onClick={handleNextInnerStep} text="ПРОДЪЛЖИ" />
        </div>
      </div>
    </section>
  );
};

export default PublishCarPage;
