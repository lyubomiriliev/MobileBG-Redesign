"use client";

import { safetyExtras } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import Checkbox from "../UI/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { updateSafetyExtras } from "@/app/store/listingSlice";
import { AppDispatch, RootState } from "@/app/store";
import Image from "next/image";

const Safety = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Load from Redux store
  const savedExtras = useSelector(
    (state: RootState) => state.listing.safetyExtras.ext || []
  );

  // Initialize state from Redux store (ensuring persistence)
  const [extras, setExtras] = useState<string[]>(savedExtras || []);

  // Sync Redux state with local component state when it mounts
  useEffect(() => {
    setExtras(savedExtras);
  }, [savedExtras]);

  const handleCarExtras = (ext: string) => {
    let updatedExtras = [...extras];

    if (updatedExtras.includes(ext)) {
      updatedExtras = updatedExtras.filter((item) => item !== ext);
    } else {
      updatedExtras.push(ext);
    }

    setExtras(updatedExtras);
    dispatch(updateSafetyExtras(updatedExtras));
  };

  return (
    <section className="mainSection">
      <div className="w-full flex flex-col justify-center items-start relative">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Безопасност (2/5)</h3>
        </div>
        <Image
          width={800}
          height={600}
          src="/safety2.png"
          alt="SafetyBackground"
          className="w-2/3 opacity-75 lg:opacity-50 lg:w-full absolute -bottom-8 -right-60 lg:-top-36 z-0"
        />
        <div className="flex flex-col justify-start gap-4 z-10">
          {safetyExtras.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl lg:text-2xl font-bold text-mobilePrimary">
                {item.name}
              </h1>
              <div>
                {item.extras.map((extra, index) => (
                  <div key={`${extra}-${index}`}>
                    <Checkbox
                      type="checkbox"
                      label={extra}
                      name="safetyExtras"
                      checked={extras.includes(extra)} // ✅ Keep checkbox checked
                      onChange={() => handleCarExtras(extra)}
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

export default Safety;
