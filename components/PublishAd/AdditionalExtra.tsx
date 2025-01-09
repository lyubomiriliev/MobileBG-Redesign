import { additionalExtras } from "@/utils/constants";
import React from "react";
import Checkbox from "../UI/Checkbox";

const AdditionalExtra = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-start max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-center items-start">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Допълнителни екстри (5/5)</h3>
        </div>
        <div className="flex flex-col justify-center gap-4 z-10">
          {additionalExtras.map((item, index) => (
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
        <div className="w-full flex flex-col justify-center items-start py-8">
          <h1 className="text-xl lg:text-2xl">Допълнителна информация</h1>
          <textarea
            className="border-[1px] border-gray-300 resize-none rounded-lg w-full h-80 p-2"
            placeholder="Попълнете информацията за автомобила ви. Максимален размер до 1000 символа."
            name="description"
            id="description"
          ></textarea>
          <label className="text-mobilePrimary">
            Моля не пишете телефонни номера в това поле!
          </label>
        </div>
      </div>
    </section>
  );
};

export default AdditionalExtra;
