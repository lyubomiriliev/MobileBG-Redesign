import { safetyExtras } from "@/utils/constants";
import React from "react";
import Checkbox from "../UI/Checkbox";

const StepThree = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-center items-start relative">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Безопасност (2/5)</h3>
        </div>
        <img
          src="/safety2.png"
          alt="SafetyBackground"
          className="w-2/3 opacity-75 lg:opacity-50 lg:w-full absolute -bottom-8 -right-60 lg:-top-40 z-0"
        />
        <div className="flex flex-col justify-center gap-4 z-10">
          {safetyExtras.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl lg:text-2xl font-bold text-mobilePrimary">
                {item.name}
              </h1>
              <div>
                {item.extras.map((extra, index) => (
                  <div key={`${extra}-${index}`}>
                    <Checkbox label={extra} />
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

export default StepThree;
