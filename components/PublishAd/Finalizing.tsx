import { listings } from "@/utils/constants";
import React from "react";
import ListingCard from "../UI/ListingCard";
import ListingReview from "./ListingReview";

const Finalizing = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-centeri items-center py-4 gap-4">
        <h1 className="text-xl lg:text-3xl">
          Публикуване - избор на тип обява и срок
        </h1>
        <h3 className="text-lg lg:text-2xl">Преглед на обявата ви</h3>
      </div>
      <ListingReview />
      <div className="w-full flex flex-col items-center py-10">
        <h1 className="text-xl lg:text-2xl">Избор на тип обява</h1>
        <div className="w-full flex justify-center items-center gap-6 py-4">
          {listings.map((item, index) => (
            <div key={index}>
              <ListingCard
                text={item.name + " " + item.price}
                vip={item.name}
                color={item.color}
                perks={item.perks}
                pricing={item.pricing}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Finalizing;
