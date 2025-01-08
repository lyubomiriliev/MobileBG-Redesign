"use client";

import React, { useState } from "react";
import { Dropdown } from "../SearchForm";
import { popularBrands } from "@/utils/constants";

const StepOne = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px-4 pb-8 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Основни характеристики и данни на автомобила
          </h1>
          <div className="w-2/3 h-[2px] bg-gray-300 my-3"></div>
        </div>
        <div className="w-full flex flex-col">
          <form className="flex flex-col">
            <div className="flex flex-col w-60">
              <Dropdown
                label="Основна категория"
                options={[
                  "Автомобили и Джипове",
                  "Бусове",
                  "Мотори",
                  "Камиони",
                  "Велосипеди",
                  "Лодки",
                  "Индустриални",
                ]}
                value={formData.category}
                onChange={(value) => handleChange("category", value)}
              />
            </div>
            <div className="py-6">
              <h3>Популярни Марки</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-1/2">
                {popularBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-slate-100 w-40 h-20 border-slate-300 border-[1px] rounded-xl flex justify-center items-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.title}
                      className="w-12 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
