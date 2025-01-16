"use client";

import {
  exteriorColors,
  interiorColors,
  interiorMaterial,
} from "@/utils/constants";
import React, { useState, useEffect } from "react";
import Checkbox from "../UI/Checkbox";
import Image from "next/image";

const LOCAL_STORAGE_KEY = "interiorExteriorData";

const InteriorExterior = () => {
  const savedData =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}")
      : {};

  const [exteriorColor, setExteriorColor] = useState(
    savedData.exteriorColor || ""
  );
  const [exteriorColorCar, setExteriorColorCar] = useState(
    savedData.exteriorColorCar || "whiteCar"
  );
  const [interiorColor, setInteriorColor] = useState(
    savedData.interiorColor || ""
  );
  const [interiorColorSeat, setInteriorColorSeat] = useState(
    savedData.interiorColorSeat || "black"
  );
  const [selectedMaterial, setSelectedMaterial] = useState(
    savedData.interiorMaterial || ""
  );

  // Save to localStorage when any state updates
  useEffect(() => {
    const dataToSave = {
      exteriorColor,
      exteriorColorCar,
      interiorColor,
      interiorColorSeat,
      interiorMaterial: selectedMaterial,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [
    exteriorColor,
    exteriorColorCar,
    interiorColor,
    interiorColorSeat,
    selectedMaterial,
  ]);

  const handleColorUpdate = (field: string, value: string, title: string) => {
    if (field === "exteriorColor") {
      setExteriorColor(value);
      setExteriorColorCar(title);
    } else if (field === "interiorColor") {
      setInteriorColor(value);
      setInteriorColorSeat(title);
    }
  };

  const handleMaterialUpdate = (material: string) => {
    setSelectedMaterial(material);
  };

  return (
    <section className="mainSection">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl text-center lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-2/3 h-[2px] bg-gray-300 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Интериор и екстериор (1/5)</h3>
        </div>
      </div>

      {/* Exterior Image */}
      <Image
        width={400}
        height={400}
        unoptimized
        src={`/exterior/${exteriorColorCar}.png`}
        alt="ExteriorColor"
        className="w-[90%] lg:w-2/3 object-cover absolute -right-8 lg:-right-24 top-[28%] lg:top-24"
      />

      {/* Interior Image */}
      <Image
        width={400}
        height={400}
        unoptimized
        src={`/interior/${interiorColorSeat}.png`}
        alt="InteriorColor"
        className="w-[90%] lg:w-2/4 object-cover absolute -right-8 -bottom-8 lg:-right-0 lg:bottom-0"
      />

      {/* Exterior Color Selection */}
      <div className="flex flex-col py-4">
        <h1 className="text-2xl lg-text-3xl font-semibold">
          Цвят на екстериор
        </h1>
        <div className="grid grid-cols-3 gap-3 py-2">
          {exteriorColors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() =>
                handleColorUpdate("exteriorColor", color.name, color.title)
              }
            >
              <div
                className={`w-10 h-10 border-[1px] ${
                  exteriorColor === color.name
                    ? "border-mobilePrimary border-[3px]"
                    : "border-mobileDarkGray"
                } hover:scale-105 duration-300 rounded-tl-2xl rounded-br-2xl`}
                style={{ backgroundColor: color.color }}
              ></div>
              <h3>{color.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Interior Material & Color Selection */}
      <div className="flex flex-col mt-24 lg:mt-0 py-4">
        <div className="w-full flex justify-start items-center font-semibold">
          <h1 className="text-2xl lg-text-3xl">Материал и цвят на интериор</h1>
        </div>

        {/* Material Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:mb-10 gap-4 py-4">
          {interiorMaterial.map((mat, index) => (
            <Checkbox
              name="interiorMaterial"
              key={index}
              checked={selectedMaterial === mat}
              label={mat}
              onChange={() => handleMaterialUpdate(mat)}
            />
          ))}
        </div>

        {/* Interior Color Selection */}
        <h1 className="text-2xl lg-text-3xl font-semibold">
          Цвят на интериор:
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-2">
          {interiorColors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() =>
                handleColorUpdate("interiorColor", color.name, color.title)
              }
            >
              <div
                className={`w-10 h-10 border-[1px] ${
                  interiorColor === color.name
                    ? "border-mobilePrimary border-[3px]"
                    : "border-mobileDarkGray"
                } hover:scale-105 duration-300 rounded-tl-2xl rounded-br-2xl`}
                style={{ backgroundColor: color.color }}
              ></div>
              <h3>{color.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorExterior;
