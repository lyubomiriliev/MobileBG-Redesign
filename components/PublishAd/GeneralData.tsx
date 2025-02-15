"use client";

import React, { useState } from "react";
import {
  brandsModelMapping,
  months,
  popularBrands,
  years,
} from "@/utils/constants";
import { Dropdown } from "../UI/Dropdown";
import { Input } from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { updateGeneralData } from "@/app/store/listingSlice";
import { AppDispatch, RootState } from "@/app/store";

const GeneralData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const genData = useSelector((state: RootState) => state.listing.generalData);

  const [activePopularBrand, setActivePopularBrand] = useState<string>("");
  const [formData, setFormData] = useState(genData);

  const handleChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else {
      setFormData({ ...formData, [field]: value });
    }

    dispatch(updateGeneralData({ [field]: value }));
  };

  const handlePopularBrandsChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    }
    dispatch(updateGeneralData({ ...formData, brand: value }));
    setActivePopularBrand(value);
  };

  const modelOptions = formData.brand ? brandsModelMapping[formData.brand] : [];

  return (
    <section className="mainSection">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl text-center">
            Основни характеристики и данни на автомобила
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
        </div>
        <Image
          alt="BGImage"
          width={400}
          height={200}
          unoptimized
          src="/images/mbCar.webp"
          className="w-full lg:w-2/3 2xl:w-2/3 opacity-75 absolute -right-24 top-24 select-none hidden lg:flex"
        />
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
              <h3 className="text-xl mb-1">Популярни Марки</h3>
              <div className="w-full grid grid-cols-3 gap-2 lg:w-[36%]">
                {popularBrands.map((brand, index) => (
                  <div
                    onClick={() =>
                      handlePopularBrandsChange("brand", brand.title)
                    }
                    key={index}
                    className={`${
                      brand.title === activePopularBrand
                        ? "bg-slate-300"
                        : "bg-slate-50"
                    } hover:bg-slate-400 duration-300 ease-in-out w-28 h-16 border-slate-300 border-[1px] rounded-xl flex justify-center items-center`}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={brand.logo}
                      alt={brand.title}
                      className="w-10 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center">
              <Dropdown
                label="Марка"
                options={Object.keys(brandsModelMapping)}
                value={formData.brand}
                onChange={(value) => handleChange("brand", value)}
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
              <Dropdown
                label="Скоростна кутия"
                options={["Автоматична", "Ръчна"]}
                value={formData.gearbox}
                onChange={(value) => handleChange("gearbox", value)}
              />
              <Input
                label="Кубатура (куб.см)"
                onChange={(value) => handleChange("litres", value)}
                value={formData.litres}
              />
              <Input
                label="Модификация"
                onChange={(value) => handleChange("modification", value)}
                value={formData.modification}
              />
              {/* DATE DROPDOWN */}
              <Dropdown
                label="Година"
                options={years}
                value={formData.dateYear}
                onChange={(value) => handleChange("dateYear", value)}
              />
              <Dropdown
                label="Месец"
                options={months}
                value={formData.dateMonth}
                onChange={(value) => handleChange("dateMonth", value)}
              />
              {/* Mileage Input */}
              <Input
                label="Пробег"
                value={formData.mileage}
                onChange={(value) => handleChange("mileage", value)}
              />
              <Input
                label="Мощност (к.с.)"
                value={formData.horsePower}
                onChange={(value) => handleChange("horsePower", value)}
              />
              <Input
                label="Цена"
                value={formData.price}
                onChange={(value) => handleChange("price", value)}
              />
              <Dropdown
                label="Валута"
                options={["лв", "€", "$"]}
                value={formData.currency}
                onChange={(value) => handleChange("currency", value)}
              />
              <Dropdown
                label="Местоположение"
                options={[
                  "гр. София",
                  "гр. Варна",
                  "гр. Бургас",
                  "гр. Пловдив",
                  "гр. Плевен",
                  "гр. Стара Загора",
                  "гр. Хасково",
                ]}
                value={formData.location}
                onChange={(value) => handleChange("location", value)}
              />
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
              <Dropdown
                label="Евростандарт"
                options={[
                  "Евро 1",
                  "Евро 2",
                  "Евро 3",
                  "Евро 4",
                  "Евро 5",
                  "Евро 6",
                ]}
                value={formData.euro}
                onChange={(value) => handleChange("euro", value)}
              />
              <Input
                label="Тунинг"
                value={formData.tuning}
                onChange={(value) => handleChange("tuning", value)}
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
