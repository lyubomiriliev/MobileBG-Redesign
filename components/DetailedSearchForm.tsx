"use client";

import React, { useState } from "react";
import { Dropdown } from "./UI/Dropdown";
import Button from "./Button";
import { Input } from "./UI/Input";
import {
  additionalExtras,
  comfortExtras,
  formFields,
  multimediaExtras,
  safetyExtras,
} from "@/utils/constants";

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
  location: string;
  coupe: string;
  euro: string;
  engine: string;
  gearbox: string;
  color: string;
  maxMileage: string;
  safety: string[];
  comfort: string[];
  multimedia: string[];
  additional: string[];
  exterior: string[];
  interior: string[];
  security: string[];
  others: string[];
  sort: string;
  filter: string;
};

const DetailedSearchForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Автомобили и Джипове",
    brand: "",
    model: "",
    priceMin: "",
    priceMax: "",
    region: "",
    yearMin: "",
    yearMax: "",
    hpMin: "",
    hpMax: "",
    location: "",
    coupe: "",
    euro: "",
    engine: "",
    gearbox: "",
    color: "",
    maxMileage: "",
    safety: [],
    comfort: [],
    multimedia: [],
    additional: [],
    exterior: [],
    interior: [],
    security: [],
    others: [],
    sort: "",
    filter: "",
  });

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

  const handleSubmit = () => {
    console.log("Search Submitted", formData);
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

      {/* Additional Checkbox Sections */}
      <div className="mt-6 text-sm">
        <h1 className="text-xl text-mobilePrimary font-bold pb-4">
          Безопасност
        </h1>
        {safetyExtras.map((section) => (
          <div key={section.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <div className="grid grid-cols-3 gap-2">
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

      <Button
        variant="longSearch"
        icon="/searchIconWhite.svg"
        text="ТЪРСЕНЕ НА ОБЯВИ"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default DetailedSearchForm;
