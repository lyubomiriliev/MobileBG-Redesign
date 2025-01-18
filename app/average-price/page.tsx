"use client";

import Button from "@/components/Button";
import { Dropdown } from "@/components/UI/Dropdown";
import { brandsModelMapping, years } from "@/utils/constants";
import React, { useState } from "react";

const AveragePricePage = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    engine: "",
    gearbox: "",
  });

  const [averagePrice, setAveragePrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const modelOptions = formData.brand ? brandsModelMapping[formData.brand] : [];

  const handleChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleCheckPrice = async () => {
    setLoading(true);
    setAveragePrice(null); // Reset the previous result

    try {
      const response = await fetch("/api/average/getAveragePrice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAveragePrice(data.averagePrice);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error fetching average price:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="basicSection">
      <div className="innerSection">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Проверете актуалната цена на Вашия автомобил
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
        </div>
        <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          <Dropdown
            label="Марка"
            options={Object.keys(brandsModelMapping)}
            value={formData.brand}
            onChange={(value) => handleChange("brand", value)}
          />
          <Dropdown
            label="Двигател"
            options={["Бензинов", "Дизелов", "Електрически", "Хибрид"]}
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
            options={["Автоматична", "Ръчна"]}
            value={formData.gearbox}
            onChange={(value) => handleChange("gearbox", value)}
          />
          <div className="flex items-center justify-between">
            <Dropdown
              label="Година на производство"
              options={years}
              value={formData.year}
              onChange={(value) => handleChange("year", value)}
            />
          </div>
        </div>
        <div
          onClick={!loading ? handleCheckPrice : undefined}
          className="py-4 gap-4 flex flex-col items-start"
        >
          <div className="w-2/3">
            <Button text="Провери цена" />
          </div>
          {averagePrice == 0 ? (
            <p className="text-lg text-red-600">
              Няма достатъчно обяви отговраящи на вашите критерии за да бъде
              направена средна цена.
            </p>
          ) : (
            <h3 className="text-xl lg:text-2xl">
              Средната цена за вашия автомобил е:{" "}
              <span className="text-mobilePrimary">{averagePrice}лв.</span>
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

export default AveragePricePage;
