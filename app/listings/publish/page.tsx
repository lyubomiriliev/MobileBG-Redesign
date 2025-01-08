"use client";
import Button from "@/components/Button";
import StepFive from "@/components/PublishAd/StepFive";
import StepFour from "@/components/PublishAd/StepFour";
import StepOne from "@/components/PublishAd/StepOne";
import StepThree from "@/components/PublishAd/StepThree";
import StepTwo from "@/components/PublishAd/StepTwo";
import React, { useState } from "react";

const PublishCarPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [innerStep, setInnerStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInnerStep = () => {
    if (innerStep < 5) {
      setInnerStep(innerStep + 1);
    }
  };

  const steps = [
    "Информация за автомобила",
    "Добавяне на снимки и видео",
    "Финализиране и публикуване",
  ];

  return (
    <section className="max-w-5xl mx-auto mt-32">
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
      <div className="bg-slate-100 shadow-md rounded-lg p-6">
        {innerStep === 1 && <StepOne />}
        {innerStep === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
        {innerStep === 3 && (
          <StepThree nextStep={nextStep} prevStep={prevStep} />
        )}
        {innerStep === 4 && (
          <StepFour nextStep={nextStep} prevStep={prevStep} />
        )}
        {innerStep === 5 && <StepFive prevStep={prevStep} />}
        <Button onClick={handleInnerStep} text="ПРОДЪЛЖИ" />
      </div>
    </section>
  );
};

export default PublishCarPage;
