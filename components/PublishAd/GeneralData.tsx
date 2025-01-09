"use client";

import React, { useState } from "react";
import { brandsModelMapping, popularBrands } from "@/utils/constants";
import { Dropdown } from "../UI/Dropdown";
import { Input } from "../UI/Input";

const GeneralData = () => {
  const [formData, setFormData] = useState({
    category: "Автомобили и Джипове",
    brand: "",
    model: "",
    modification: "",
    tuning: "",
    engine: "",
    gearbox: "",
    dateYear: "",
    dateMonth: "",
    coupe: "",
    vin: "",
    mileage: "",
    price: "",
    currency: "",
    location: "",
  });

  const handleChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const modelOptions = formData.brand ? brandsModelMapping[formData.brand] : [];

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl text-center">
            Основни характеристики и данни на автомобила
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-[36%]">
                {popularBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-gray-300 duration-300 ease-in-out w-28 h-16 border-slate-300 border-[1px] rounded-xl flex justify-center items-center"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.title}
                      className="w-10 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-2/3 items-center">
              <Dropdown
                label="Марка"
                options={Object.keys(brandsModelMapping)}
                value={formData.brand}
                onChange={(value) => handleChange("brand", value)}
              />
              <Input
                label="Тунинг"
                onChange={(value) => handleChange("tuning", value)}
                value={formData.tuning}
              />
              <Dropdown
                label="Модел"
                options={modelOptions}
                value={formData.model}
                onChange={(value) => handleChange("model", value)}
              />
              <Dropdown
                label="Двигател"
                options={["Бензинов", "Дизелов", "Хибрид", "Електрически"]}
                value={formData.engine}
                onChange={(value) => handleChange("engine", value)}
              />
              <Input
                label="Модификация"
                onChange={(value) => handleChange("modification", value)}
                value={formData.modification}
              />
              <Dropdown
                label="Скоростна кутия"
                options={["Автоматична", "Ръчна"]}
                value={formData.gearbox}
                onChange={(value) => handleChange("gearbox", value)}
              />
              {/* DATE DROPDOWN */}
              <Dropdown
                label="Година"
                options={[
                  "2025",
                  "2024",
                  "2023",
                  "2022",
                  "2021",
                  "2020",
                  "2019",
                  "2018",
                  "2017",
                ]}
                value={formData.dateYear}
                onChange={(value) => handleChange("dateYear", value)}
              />
              <Dropdown
                label="Месец"
                options={[
                  "Януари",
                  "Февруари",
                  "Март",
                  "Април",
                  "Май",
                  "Юни",
                  "Юли",
                  "Август",
                  "Септември",
                  "Октомври",
                  "Ноември",
                  "Декември",
                ]}
                value={formData.dateMonth}
                onChange={(value) => handleChange("dateMonth", value)}
              />
              {/* Mileage Input */}
              <Input
                label="Пробег"
                value={formData.mileage}
                onChange={(value) => handleChange("mileage", value)}
              />
              {/* VIN Input */}
              <Dropdown
                label="Купе"
                options={[
                  "Хечбек",
                  "Седан",
                  "Комби",
                  "Джип",
                  "Кабриолет",
                  "Лимузина",
                  "Стреч-лимузина",
                ]}
                value={formData.coupe}
                onChange={(value) => handleChange("coupe", value)}
              />
              <Input
                label="Цена"
                value={formData.price}
                onChange={(value) => handleChange("price", value)}
              />
              <Dropdown
                label="Валута"
                options={["BGN", "EUR", "USD"]}
                value={formData.currency}
                onChange={(value) => handleChange("currency", value)}
              />
              <Dropdown
                label="Местоположение"
                options={[
                  "София",
                  "Варна",
                  "Бургас",
                  "Пловдив",
                  "Плевен",
                  "Стара Загора",
                  "Хасково",
                ]}
                value={formData.location}
                onChange={(value) => handleChange("location", value)}
              />
              <Input
                label="VIN номер"
                value={formData.vin}
                onChange={(value) => handleChange("vin", value)}
              />
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GeneralData;
