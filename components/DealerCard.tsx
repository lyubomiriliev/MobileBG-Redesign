import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const DealerCard = ({
  name,
  date,
  phone,
  location,
}: {
  name: string;
  date: string;
  phone: string;
  location: string;
}) => {
  return (
    <section className="w-full h-auto bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 rounded-lg p-4 shadow-md border-slate-200 border-[1px] flex">
      <div className="w-full h-full flex flex-col justify-between items-start">
        <div className="flex items-center gap-2">
          <h1 className="text-xl lg:text-2xl">{name}</h1>
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
        <div className="flex items-center gap-2 cursor-pointer group">
          <FaExternalLinkAlt
            className="text-mobilePrimary group-hover:text-mobileDarkGray"
            size={16}
          />
          <p className="text-mobilePrimary text-xl font-bold group-hover:text-mobileDarkGray">
            Виж всичките ни обяви
          </p>
        </div>
      </div>

      <div className="w-1/3 lg:w-2/3 flex items-center">
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
