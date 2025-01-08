"use client";
import Button from "@/components/Button";
import StepFive from "@/components/PublishAd/StepFive";
import StepFour from "@/components/PublishAd/StepFour";
import StepOne from "@/components/PublishAd/StepOne";
import StepSix from "@/components/PublishAd/StepSix";
import StepThree from "@/components/PublishAd/StepThree";
import StepTwo from "@/components/PublishAd/StepTwo";
import React, { useState } from "react";

const PublishCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [innerStep, setInnerStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextInnerStep = () => {
    if (innerStep < 6) {
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
        {innerStep === 1 && <StepOne />}
        {innerStep === 2 && <StepTwo />}
        {innerStep === 3 && <StepThree />}
        {innerStep === 4 && <StepFour />}
        {innerStep === 5 && <StepFive />}
        {innerStep === 6 && <StepSix />}
        <div className="z-50">
          <Button onClick={handleNextInnerStep} text="ПРОДЪЛЖИ" />
        </div>
      </div>
    </section>
  );
};

export default PublishCarPage;
