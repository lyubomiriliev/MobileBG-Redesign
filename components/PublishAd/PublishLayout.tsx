"use client";

import React from "react";
import { steps } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

import { IoArrowBackCircleOutline } from "react-icons/io5";

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
    <section className="max-w-5xl mx-auto mt-24">
      {/* Progress Bar */}
      <div className="lg:flex items-center justify-between mb-8 hidden">
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
      <div className="w-full flex items-center justify-center relative">
        <h2 className="text-3xl uppercase text-mobilePrimary font-bold mb-4 text-center">
          Добавяне на обява
        </h2>
        {showBackButton && onBackClick && (
          <IoArrowBackCircleOutline
            size={30}
            onClick={onBackClick}
            className="hover:text-mobilePrimary duration-300 ease-in absolute left-2 cursor-pointer top-1 lg:left-0 lg:top-1"
          />
        )}
      </div>
      <div className="w-[95%] mx-auto lg:w-full bg-white shadow-lg border-[1px] border-slate-200 mb-20 rounded-lg lg:p-6 lg:pt-10 flex flex-col justify-start items-start relative overflow-hidden">
        {children}
      </div>
    </section>
  );
};

export default PublishLayout;
