"use client";

import React, { useEffect, useState } from "react";
import { Dropdown } from "./UI/Dropdown";
import Button from "./Button";
import { Input } from "./UI/Input";
import {
  additionalExtras,
  brandsModelMapping,
  categoriesModelMapping,
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
import { updateCriteria } from "@/app/store/searchSlice";

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
};

const DetailedSearchForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchCriteria = useSelector((state: RootState) => state.search);
  const router = useRouter();
  const [formData, setFormData] = useState(searchCriteria);

  const [brandOptions, setBrandOptions] = useState<string[]>([]);
  const [modelOptions, setModelOptions] = useState<string[]>([]);

  useEffect(() => {
    setFormData(searchCriteria);
  }, [searchCriteria]);

  useEffect(() => {
    // Update brand options based on the selected category
    if (formData.category) {
      setBrandOptions(categoriesModelMapping[formData.category] || []);
    } else {
      setBrandOptions([]);
    }
  }, [formData.category]);

  useEffect(() => {
    // Update model options based on the selected brand
    if (formData.brand) {
      setModelOptions(brandsModelMapping[formData.brand] || []);
    } else {
      setModelOptions([]);
    }
  }, [formData.brand]);

  const handleChange = (field: keyof typeof formData, value: string) => {
    if (field === "brand") {
      setFormData({ ...formData, brand: value, model: "" });
    } else if (field === "category") {
      setFormData({ ...formData, category: value, brand: "", model: "" });
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
    dispatch(updateCriteria({ [field]: value }));
  };

  const handleArrayChange = (field: keyof typeof formData, value: string) => {
    if (!Array.isArray(formData[field])) {
      throw new Error(
        `Field ${field} is not an array and cannot be updated as one.`
      );
    }

    const updatedArray = formData[field].includes(value)
      ? formData[field].filter((item) => item !== value) // Safe to call filter since it's an array
      : [...formData[field], value];

    setFormData((prev) => ({ ...prev, [field]: updatedArray }));
    dispatch(updateCriteria({ [field]: updatedArray } as Partial<FormData>));
  };

  const handleSingleSelection = (field: keyof FormData, value: string) => {
    if (Array.isArray(formData[field])) {
      throw new Error(`Invalid update for array field ${field}`);
    }
    setFormData({ ...formData, [field]: value });
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

  useEffect(() => {
    setFormData(searchCriteria);
  }, [searchCriteria]);

  return (
    <div className="w-full max-w-5xl mx-auto text-lg lg:p-4 rounded-lg">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Dropdown
          label="Категория"
          options={Object.keys(categoriesModelMapping)}
          value={formData.category}
          onChange={(value) => handleChange("category", value)}
        />

        {/* Brand Dropdown */}
        <Dropdown
          label="Марка"
          options={brandOptions}
          value={formData.brand}
          onChange={(value) => handleChange("brand", value)}
        />

        {/* Model Dropdown */}
        <Dropdown
          label="Модел"
          options={modelOptions}
          value={formData.model}
          onChange={(value) => handleChange("model", value)}
        />

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

      <div className="w-full lg:w-1/3 flex">
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
