"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { Dropdown } from "./UI/Dropdown";
import { brandsModelMapping, categoriesModelMapping } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Input } from "./UI/Input";
import Link from "next/link";

const SearchForm = ({
  category,
  setCategory,
}: {
  category: string;
  setCategory: (value: string) => void;
}) => {
  useEffect(() => {
    setFormData((prev) => ({ ...prev, category }));
  }, [category]);

  const router = useRouter();

  const [formData, setFormData] = useState({
    category: category || "Автомобили и Джипове",
    brand: "",
    model: "",
    region: "",
    maxPrice: "",
    year: "",
    engine: "",
    gearbox: "",
    sortBy: "",
  });

  const handleChange = (field: string, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else if (field === "category") {
      setCategory(value);
      setFormData({ ...formData, category: value, brand: "", model: "" });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = () => {
    const query = new URLSearchParams(
      Object.entries(formData).reduce((acc, [key, value]) => {
        if (Array.isArray(value) && value.length > 0) {
          acc[key] = value.join(",");
        } else if (typeof value === "string" && value.trim() !== "") {
          // Only include non-empty string values
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, string>)
    ).toString();

    router.push(`/browse/listings?${query}`);
  };

  const brandOptions = formData.category
    ? categoriesModelMapping[formData.category] || []
    : [];
  const modelOptions = formData.brand ? brandsModelMapping[formData.brand] : [];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white lg:p-6 rounded-lg">
      <div className="flex flex-col">
        <div className="w-full flex justify-between items-center mb-2">
          <h2 className="text-mobilePrimary font-medium text-xl">
            Търсене в категория:
          </h2>
        </div>
        <div className="mb-2">
          <Dropdown
            label=""
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
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Dropdown Inputs */}
        <Dropdown
          label="Марка"
          options={brandOptions}
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
          label="Регион"
          options={["Всички", "София", "Пловдив", "Варна"]}
          value={formData.region}
          onChange={(value) => handleChange("region", value)}
        />
        <Dropdown
          label="Година"
          options={["Всички", "2023", "2022", "2021"]}
          value={formData.year}
          onChange={(value) => handleChange("year", value)}
        />
        <Dropdown
          label="Двигател"
          options={["Всички", "Бензин", "Дизел", "Електрически"]}
          value={formData.engine}
          onChange={(value) => handleChange("engine", value)}
        />
        <Dropdown
          label="Скоростна кутия"
          options={["Всички", "Автоматична", "Ръчна"]}
          value={formData.gearbox}
          onChange={(value) => handleChange("gearbox", value)}
        />

        {/* Text Input for Max Price */}
        <div>
          <label className="block font-medium text-mobileDarkGray mb-1">
            Максимална Цена
          </label>
          <input
            type="number"
            className="w-full border h-10 border-slate-400 rounded-md p-[2px] lg:p-2"
            value={formData.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
            placeholder=""
          />
        </div>

        {/* Dropdown for Sort By */}
        <Dropdown
          label="Подреди резултатите по"
          options={["Марка/Модел/Цена", "Цена", "Марка"]}
          value={formData.sortBy}
          onChange={(value) => handleChange("sortBy", value)}
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col justify-center items-center gap-1">
        <Button
          variant="longSearch"
          onClick={handleSubmit}
          icon="/searchIconWhite.svg"
          text="ТЪРСЕНЕ НА ОБЯВИ"
        ></Button>
      </div>
      <Link href="/search">
        <div className="w-full flex flex-col justify-center items-center pt-2">
          <span>ОЩЕ КРИТЕРИИ ЗА ТЪРСЕНЕ</span>
        </div>
      </Link>
    </div>
  );
};

export default SearchForm;
