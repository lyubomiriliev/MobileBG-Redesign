"use client";

import { multimediaExtras } from "@/utils/constants";
import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { updateMediaExtras } from "@/app/store/listingSlice";

const MultimediaDevices = () => {
  const [extras, setExtras] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleCarExtras = (ext: string) => {
    let updatedExtras = [...extras];
    if (updatedExtras.includes(ext)) {
      updatedExtras = updatedExtras.filter((item) => item !== ext);
    } else {
      updatedExtras.push(ext);
    }
    setExtras(updatedExtras);
    dispatch(updateMediaExtras(updatedExtras));
  };

  return (
    <section className="mainSection relative">
      <div className="w-full flex flex-col justify-center items-start">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Мултимедиа и устройства (4/5)</h3>
        </div>
        <Image
          width={600}
          height={800}
          unoptimized
          src="/carMultimedia.png"
          alt="SafetyBackground"
          className="w-[85%] lg:w-full opacity-50 absolute -bottom-20 -right-10 lg:top-64 2xl:top-96 z-0"
        />
        <div className="grid grid-cols-2 lg:grid-cols-1 justify-center gap-4 z-10">
          {multimediaExtras.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl lg:text-2xl font-bold text-mobilePrimary">
                {item.name}
              </h1>
              <div>
                {item.extras.map((extra, index) => (
                  <div key={`${extra}-${index}`}>
                    <Checkbox
                      onChange={() => handleCarExtras(extra)}
                      label={extra}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultimediaDevices;
