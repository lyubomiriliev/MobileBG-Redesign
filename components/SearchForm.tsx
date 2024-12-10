"use client";

import { useState } from "react";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    category: "Автомобили и Джипове",
    brand: "Всички",
    model: "Всички",
    region: "Всички",
    maxPrice: "",
    year: "Всички",
    engine: "Всички",
    gearbox: "Всички",
    sortBy: "Марка/Модел/Цена",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Build query string based on formData
    const query = new URLSearchParams(
      Object.entries(formData).filter(
        ([_, value]) => value !== "Всички" && value !== ""
      )
    ).toString();

    // Redirect to search results page
    window.location.href = `/search?${query}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-lg">
      <div className="flex flex-col">
        <h2 className="text-mobilePrimary font-medium text-xl mb-4">
          Търсене в категория:
        </h2>
        <div className="mb-5">
          <Dropdown
            label=""
            options={[
              "Автомобили и Джипове",
              "Бусове",
              "Мотори",
              "Камиони",
              "Мотоциклети",
              "Лодки",
              "Индустриални",
            ]}
            value={formData.brand}
            onChange={(value) => handleChange("brand", value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Dropdown Inputs */}
        <Dropdown
          label="Марка"
          options={["Всички", "Toyota", "BMW", "Mercedes"]}
          value={formData.brand}
          onChange={(value) => handleChange("brand", value)}
        />
        <Dropdown
          label="Модел"
          options={["Всички", "Corolla", "X5", "C-Class"]}
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
          <label className="block font-medium text-gray-700 mb-1">
            Максимална Цена
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.maxPrice}
            onChange={(e) => handleChange("maxPrice", e.target.value)}
            placeholder="Всички"
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
        <button
          className="mt-6 w-full bg-mobilePrimary text-white py-2 rounded-lg hover:bg-mobilePrimaryDark"
          onClick={handleSubmit}
        >
          ТЪРСЕНЕ НА ОБЯВИ
        </button>
        <span>ОЩЕ КРИТЕРИИ ЗА ТЪРСЕНЕ</span>
      </div>
    </div>
  );
};

// Dropdown Component
const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full border border-gray-300 rounded-md p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchForm;
