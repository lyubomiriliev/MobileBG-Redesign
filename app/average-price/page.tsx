"use client";

import Button from "@/components/Button";
import { Dropdown } from "@/components/UI/Dropdown";
import { brandsModelMapping, months, years } from "@/utils/constants";
import React, { useState } from "react";

const page = () => {
  const handleChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const [checkPrice, setCheckPrice] = useState(false);

  const handleCheckPrice = () => {
    setCheckPrice(!checkPrice);
  };

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    month: "",
    engine: "",
    gearbox: "",
    coupe: "",
  });

  const modelOptions = formData.brand ? brandsModelMapping[formData.brand] : [];

  return (
    <section className="basicSection">
      <div className="innerSection">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Проверете актуалната цена на Вашия автомобил
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
        </div>
        <div className="w-2/3 grid grid-cols-2 items-center gap-4">
          <Dropdown
            label="Марка"
            options={Object.keys(brandsModelMapping)}
            value={formData.brand}
            onChange={(value) => handleChange("brand", value)}
          />
          <Dropdown
            label="Двигател"
            options={["Всички", "Бензин", "Дизел", "Електрически"]}
            value={formData.engine}
            onChange={(value) => handleChange("engine", value)}
          />
          <Dropdown
            label="Модел"
            options={modelOptions}
            value={formData.model}
            onChange={(value) => handleChange("model", value)}
          />
          <Dropdown
            label="Скоростна кутия"
            options={["Всички", "Автоматична", "Ръчна"]}
            value={formData.gearbox}
            onChange={(value) => handleChange("gearbox", value)}
          />
          <div className="flex items-center justify-between">
            <Dropdown
              label="Година"
              options={years}
              value={formData.year}
              onChange={(value) => handleChange("year", value)}
            />
            <Dropdown
              label="Месец"
              options={months}
              value={formData.month}
              onChange={(value) => handleChange("month", value)}
            />
          </div>
        </div>
        <div
          onClick={handleCheckPrice}
          className="py-4 gap-4 flex items-center"
        >
          <Button text="Провери цена" />
          {checkPrice && (
            <h3 className="text-xl lg:text-2xl">
              Вашата цена е:{" "}
              <span className="text-mobilePrimary">24 600лв.</span>
            </h3>
          )}
        </div>
        <div className="w-full flex flex-col text-base">
          <p>
            Средната цена е на база данните от mobile.bg и е актуална към{" "}
            {new Date().toLocaleDateString("bg-BG", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>
            Възможно е да варира в зависимост от наличието на допълнителни
            екстри и състоянието на автомобила.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
