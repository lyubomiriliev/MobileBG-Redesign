import { perks } from "@/utils/constants";
import React from "react";
import Perk from "./Perk";

const WhyChooseUs = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto py-8">
      <div className="gap-6 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl lg:text-4xl">Защо да изберете mobile?</h1>
        </div>
        {perks.map((perk, index) => (
          <div key={index}>
            <Perk
              title={perk.title}
              icon={perk.icon}
              reverse={index % 2 !== 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
