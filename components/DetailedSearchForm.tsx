"use client";

import React, { useState } from "react";
import { Dropdown } from "./UI/Dropdown";
import Button from "./Button";
import { Input } from "./UI/Input";
import {
  additionalExtras,
  comfortExtras,
  formFields,
  interiorColorsArr,
  interiorMaterials,
  multimediaExtras,
  safetyExtras,
} from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

type FormData = {
  category: string;
  brand: string;
  model: string;
  priceMin: string;
  priceMax: string;
  region: string;
  yearMin: string;
  yearMax: string;
  hpMin: string;
  hpMax: string;
  coupe: string;
  euro: string;
  engine: string;
  gearbox: string;
  color: string;
  maxMileage: string;
  materials: string;
  intColor: string;
  sort: string;
  safety: string[];
  location: string;
  comfort: string[];
  multimedia: string[];
  additional: string[];
  exterior: string[];
  interior: string[];
  security: string[];
  others: string[];
  filter: string;
};

const DetailedSearchForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchCriteria = useSelector((state: RootState) => state.search);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    category: "Автомобили и Джипове",
    brand: "",
    model: "",
    region: "",
    priceMin: "",
    priceMax: "",
    yearMin: "",
    yearMax: "",
    hpMin: "",
    hpMax: "",
    euro: "",
    engine: "",
    gearbox: "",
    location: "",
    color: "",
    maxMileage: "",
    sort: "",
    coupe: "",
    materials: "",
    intColor: "",
    safety: [],
    comfort: [],
    multimedia: [],
    additional: [],
    exterior: [],
    interior: [],
    security: [],
    others: [],
    filter: "",
  });

  console.log(formData);

  const handleChange = (field: keyof FormData, value: string) => {
    if (Array.isArray(formData[field])) {
      throw new Error(`Invalid update for array field: ${field}`);
    }
    setFormData({ ...formData, [field]: value });
  };

  const handleArrayChange = (field: keyof FormData, value: string) => {
    if (!Array.isArray(formData[field])) {
      throw new Error(`Invalid update for non-array field: ${field}`);
    }
    setFormData((prev) => {
      const updatedField = prev[field] as string[];
      if (updatedField.includes(value)) {
        return {
          ...prev,
          [field]: updatedField.filter((item) => item !== value),
        };
      }
      return { ...prev, [field]: [...updatedField, value] };
    });
  };

  const handleSingleSelection = (field: keyof FormData, value: string) => {
    if (Array.isArray(formData[field])) {
      throw new Error(`Invalid update for array field ${field}`);
    }
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const filteredFormData = Object.entries(formData).reduce(
      (acc, [key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) acc[key] = value.join(","); // Include non-empty arrays as comma-separated values
        } else if (value) {
          acc[key] = value; // Include non-empty strings
        }
        return acc;
      },
      {} as Record<string, string>
    );

    // Convert to query string
    const query = new URLSearchParams(filteredFormData).toString();

    console.log(filteredFormData);
    router.push(`/browse/listings?${query}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-6 rounded-lg">
      <div className="grid grid-cols-4 gap-4">
        {formFields.map((field) => {
          if (field.type === "dropdown") {
            return (
              <Dropdown
                key={field.key}
                label={field.label}
                options={field.options || []}
                value={formData[field.key] as string}
                onChange={(value) => handleChange(field.key, value)}
              />
            );
          }

          if (field.type === "input") {
            return (
              <Input
                key={field.key}
                label={field.label}
                value={formData[field.key] as string}
                onChange={(value) => handleChange(field.key, value)}
              />
            );
          }

          return null;
        })}
      </div>
      <div className="w-full flex flex-col py-10">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">Интериор</h1>
        {interiorMaterials.map((int) => (
          <div key={int.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{int.name}</h3>
            <div className="grid grid-cols-3 gap-2">
              {int.materials.map((mat) => (
                <label key={mat} className="flex items-center">
                  <input
                    type="radio"
                    name="materials"
                    checked={formData.materials === mat}
                    onChange={() => handleSingleSelection("materials", mat)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{mat}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col">
        {interiorColorsArr.map((col) => (
          <div key={col.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{col.name}</h3>
            <div className="grid grid-cols-3 gap-2">
              {col.colors.map((color, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="colors"
                    checked={formData.intColor === color}
                    onChange={() => handleSingleSelection("intColor", color)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{color}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Checkbox Sections */}
      <div className="mt-6 text-sm">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">
          Безопасност
        </h1>
        {safetyExtras.map((section) => (
          <div key={section.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <div className="grid grid-cols-2 gap-2">
              {section.extras.map((extra) => (
                <label key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.safety.includes(extra)}
                    onChange={() => handleArrayChange("safety", extra)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{extra}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">Комфорт</h1>
        {comfortExtras.map((section) => (
          <div key={section.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <div className="grid grid-cols-2 gap-2">
              {section.extras.map((extra) => (
                <label key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.comfort.includes(extra)}
                    onChange={() => handleArrayChange("comfort", extra)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{extra}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">
          Мултимедия и устройства
        </h1>
        {multimediaExtras.map((section) => (
          <div key={section.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <div className="grid grid-cols-2 gap-2">
              {section.extras.map((extra) => (
                <label key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.multimedia.includes(extra)}
                    onChange={() => handleArrayChange("multimedia", extra)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{extra}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">
          Други екстри
        </h1>
        {additionalExtras.map((section) => (
          <div key={section.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <div className="grid grid-cols-2 gap-2">
              {section.extras.map((extra) => (
                <label key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.additional.includes(extra)}
                    onChange={() => handleArrayChange("additional", extra)}
                    className="w-5 h-5"
                  />
                  <span className="ml-2">{extra}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/3 flex">
        <Button
          variant="longSearch"
          icon="/searchIconWhite.svg"
          text="ТЪРСЕНЕ НА ОБЯВИ"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DetailedSearchForm;
