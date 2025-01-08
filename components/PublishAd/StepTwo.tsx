"use client";
import {
  exteriorColors,
  interiorColors,
  interiorMaterial,
} from "@/utils/constants";
import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";

const StepTwo = () => {
  const [exteriorColor, setExteriorColor] = useState("whiteCar");
  const [interiorColor, setInteriorColor] = useState("black");

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Интериор и екстериор (1/5)</h3>
        </div>
      </div>
      <img
        src={`/exterior/${exteriorColor}.png`}
        alt="ExteriorColor"
        className="w-2/3 object-cover absolute -right-24 top-24"
      />
      <img
        src={`/interior/${interiorColor}.png`}
        alt="InteriorColor"
        className="w-2/4 object-cover absolute -right-0 bottom-0"
      />
      <div className="flex flex-col py-4">
        <h1 className="text-xl lg-text-3xl">Цвят на екстериор</h1>
        <div className="grid grid-cols-3 gap-3 py-2">
          {exteriorColors.map((color, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div
                onClick={() => setExteriorColor(color.title)}
                className="w-10 h-10 border-[1px] hover:border-[1px] select-none hover:border-black border-mobileDarkGray/35 rounded-tl-2xl rounded-br-2xl"
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
            <div key={index}>
              <Checkbox label={mat} />
            </div>
          ))}
        </div>
        <h1 className="text-xl lg-text-3xl">Цвят на интериор:</h1>
        <div className="grid grid-cols-2 gap-3 py-2">
          {interiorColors.map((color, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div
                onClick={() => setInteriorColor(color.title)}
                className="w-10 h-10 border-[1px] hover:border-[1px] select-none hover:border-black border-mobileDarkGray/35 rounded-tl-2xl rounded-br-2xl"
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

export default StepTwo;
