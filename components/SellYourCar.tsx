import React from "react";
import SellCarStep from "./SellCarStep";
import { sellCarSteps } from "@/utils/constants";

const SellYourCar = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col justify-start items-center text-center">
        <h1 className="text-4xl lg:text-4xl">Продайте автомобила си</h1>
        <span className="text-mobilePrimary uppercase font-semibold text-[55px]">
          Бързо и лесно!
        </span>
        <div className="w-full flex justify-start text-center px-6 py-4">
          <p className="max-w-3xl text-lg lg:text-xl">
            Ако искате да продадете своя автомобил, mobile.bg е идеалното място
            за вас. Публикувайте обявата си лесно и достигнете до хиляди
            потенциални купувачи. Нашата платформа ви предоставя всичко
            необходимо за успешна продажба:
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-6">
        {sellCarSteps.map((step, index) => (
          <div className="w-full flex px-4 lg:px-0 lg:w-1/3" key={index}>
            <SellCarStep
              id={step.id}
              title={step.title}
              subTitle={step.subTitle}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellYourCar;
