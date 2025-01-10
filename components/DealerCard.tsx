import Image from "next/image";
import React from "react";

const DealerCard = ({
  name,
  date,
  phone,
  logo,
  location,
}: {
  name: string;
  date: string;
  phone: string;
  logo: string;
  location: string;
}) => {
  return (
    <section className="w-[400px] h-[180px] bg-gradient-to-r from-white via-slate-100 to-slate-50 rounded-lg p-4 shadow-md border-slate-200 border-[1px] flex">
      <div className="w-full h-full flex flex-col justify-between items-start">
        <div className="flex items-center gap-2">
          <h1 className="text-xl">{name}</h1>
          <div className="flex items-center gap-1">
            <Image width={20} height={20} alt="BlueTick" src="/blueTick.svg" />
            <span className="text-xl text-mobilePrimary font-bold">5+</span>
          </div>
        </div>
        <h3>
          Дилър в mobile.bg от <span>{date}</span>
        </h3>
        <div className="flex flex-col py-2">
          <p>{phone}</p>
          <p>{location}</p>
        </div>
        <div>
          <p className="text-mobilePrimary text-xl font-bold">
            Виж всичките ни обяви
          </p>
        </div>
      </div>

      <div className="w-2/3 flex items-center">
        <Image
          width={200}
          height={100}
          className="w-full"
          alt="DealerLogo"
          src="/dealer.png"
        />
      </div>
    </section>
  );
};

export default DealerCard;
