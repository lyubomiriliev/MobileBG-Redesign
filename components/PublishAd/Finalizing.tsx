import { listings } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import ListingCard from "../UI/ListingCard";

const Finalizing = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-centeri items-center py-8">
        <h1 className="text-xl lg:text-3xl">
          Публикуване - избор на тип обява и срок
        </h1>
        <h3 className="text-lg lg:text-xl">Преглед на обявата ви</h3>
      </div>
      <div className="w-full flex justify-start items-start bg-slate-100 rounded-lg p-4">
        <div>
          <Image
            alt="CarImg"
            width={400}
            height={400}
            src="/car1.png"
            className="w-60 h-60 object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex flex-col items-start px-4">
            <h3 className="text-mobilePrimary font-bold">Цена: 58 000лв.</h3>
            <h3>BMW X3 30d xDrive M-Sport</h3>
            <h3>гр. София</h3>
          </div>
        </div>
      </div>
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
