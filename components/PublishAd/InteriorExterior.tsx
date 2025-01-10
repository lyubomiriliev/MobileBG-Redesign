"use client";

import {
  exteriorColors,
  interiorColors,
  interiorMaterial,
} from "@/utils/constants";
import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  updateInteriorExterior,
} from "@/app/store/redux";
import Image from "next/image";

const InteriorExterior = () => {
  const dispatch = useDispatch<AppDispatch>();

  const listingData = useSelector((state: RootState) => state.listing);
  console.log("Current Redux State:", listingData);

  const [exteriorColor, setExteriorColor] = useState("whiteCar");
  const [interiorColor, setInteriorColor] = useState("black");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const handleColorUpdate = (field: string, value: string) => {
    if (field === "exteriorColor") {
      setExteriorColor(value);
      dispatch(updateInteriorExterior({ exteriorColor: value }));
    } else if (field === "interiorColor") {
      setInteriorColor(value);
      dispatch(updateInteriorExterior({ interiorColor: value }));
    }
  };

  const handleMaterialUpdate = (material: string) => {
    setSelectedMaterial(material);
    dispatch(updateInteriorExterior({ interiorMaterial: material }));
  };

  return (
    <section className="mainSection">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-2/3 h-[2px] bg-gray-300 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Интериор и екстериор (1/5)</h3>
        </div>
      </div>
      <Image
        width={400}
        height={400}
        unoptimized
        src={`/exterior/${exteriorColor}.png`}
        alt="ExteriorColor"
        className="w-2/3 object-cover absolute -right-24 top-24"
      />
      <Image
        width={400}
        height={400}
        unoptimized
        src={`/interior/${interiorColor}.png`}
        alt="InteriorColor"
        className="w-2/4 object-cover absolute -right-0 bottom-0"
      />
      <div className="flex flex-col py-4">
        <h1 className="text-xl lg-text-3xl">Цвят на екстериор</h1>
        <div className="grid grid-cols-3 gap-3 py-2">
          {exteriorColors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleColorUpdate("exteriorColor", color.title)}
            >
              <div
                className={`w-10 h-10 border-[1px] ${
                  exteriorColor === color.title
                    ? "border-black"
                    : "border-mobileDarkGray/35"
                } hover:border-black rounded-tl-2xl rounded-br-2xl`}
                style={{ backgroundColor: color.color }}
              ></div>
              <h3>{color.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-4">
        <h1 className="text-xl lg-text-3xl">Материал и цвят на интериор</h1>
        <div className="grid grid-cols-2 gap-4 py-4">
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
        <h1 className="text-xl lg-text-3xl">Цвят на интериор:</h1>
        <div className="grid grid-cols-2 gap-3 py-2">
          {interiorColors.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleColorUpdate("interiorColor", color.title)}
            >
              <div
                className={`w-10 h-10 border-[1px] ${
                  interiorColor === color.title
                    ? "border-black"
                    : "border-mobileDarkGray/35"
                } hover:border-black rounded-tl-2xl rounded-br-2xl`}
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
