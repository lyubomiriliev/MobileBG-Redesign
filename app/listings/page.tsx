import MyListingCard from "@/components/UI/MyListingCard";
import React from "react";

const page = () => {
  return (
    <section className="basicSection !max-w-4xl">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl">Моите обяви</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start py-14">
        <p>Списък и управление на публикуваните от Вас обяви.</p>
        <p>Имате 2 Активни и 0 Неактивни обяви.</p>
      </div>
      <div className="w-full flex flex-col gap-4 items-center relative">
        <MyListingCard />
        <MyListingCard />
        <div className="w-32 h-8 bg-mobilePrimary text-white flex justify-center items-center rounded-tr-2xl rounded-tl-2xl absolute -top-8 left-6">
          Активни обяви
        </div>
        <div className="w-32 h-8 bg-mobileDarkGray text-white flex justify-center items-center rounded-tr-2xl rounded-tl-2xl absolute -top-8 left-40">
          Неактивни обяви
        </div>
      </div>
    </section>
  );
};

export default page;
