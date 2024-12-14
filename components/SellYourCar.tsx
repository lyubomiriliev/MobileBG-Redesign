import React from "react";
import SellCarStep from "./SellCarStep";
import { sellCarSteps } from "@/utils/constants";

const SellYourCar = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-3xl lg:text-4xl">
          Продайте автомобила си бързо и лесно
        </h1>
        <p className="max-w-xl">
          Ако искате да продадете своя автомобил, mobile.bg е идеалното място за
          вас. Публикувайте обявата си лесно и достигнете до хиляди потенциални
          купувачи. Нашата платформа ви предоставя всичко необходимо за успешна
          продажба:
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 py-4">
        {sellCarSteps.map((step, index) => (
          <div className="w-full px-4 lg:px-0 lg:w-1/3" key={index}>
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
