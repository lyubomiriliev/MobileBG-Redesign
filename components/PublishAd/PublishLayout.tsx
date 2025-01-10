"use client";

import React from "react";
import { steps } from "@/utils/constants";
import Link from "next/link";

const PublishLayout = ({
  currentStep,
  children,
  onBackClick,
  showBackButton = true,
}: {
  currentStep: number;
  children: React.ReactNode;
  onBackClick?: () => void;
  showBackButton?: boolean;
}) => {
  return (
    <section className="max-w-5xl mx-auto px-4 lg:px-0 mt-32">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <Link
            key={index}
            href={`${
              index === 0
                ? "/listings/publish"
                : index === 1
                ? "/listings/publish/upload"
                : "/listings/publish/review"
            }`}
          >
            <div
              className={`flex-1 text-center py-2 px-4 rounded-md ${
                currentStep === index + 1
                  ? "text-mobilePrimary"
                  : "text-gray-600"
              }`}
            >
              <span className="font-bold text-xl uppercase">{`Стъпка ${
                index + 1
              }`}</span>
              <p className="text-base mt-1">{step}</p>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="text-3xl uppercase text-mobilePrimary font-bold mb-4 text-center">
        Добавяне на обява
      </h2>
      <div className="bg-white shadow-lg border-[1px] border-slate-200 mb-20 min-h-screen rounded-lg p-6 pt-10 flex flex-col justify-center items-center relative overflow-hidden">
        {showBackButton && onBackClick && (
          <div
            onClick={onBackClick}
            className="flex items-center gap-2 cursor-pointer absolute left-2 top-2 lg:left-6 lg:top-6"
          >
            <img src="/images/backArrow.svg" className="w-6" alt="Back" />
            <p>Назад</p>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default PublishLayout;
