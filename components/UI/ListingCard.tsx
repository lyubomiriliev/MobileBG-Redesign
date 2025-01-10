import React from "react";
import Button from "../Button";

const ListingCard = ({
  text,
  vip,
  color,
  perks,
  pricing,
}: {
  text: string;
  vip: string;
  color: string;
  perks: string[];
  pricing?: number;
}) => {
  return (
    <div
      className={`w-[300px] h-[400px] flex flex-col justify-start items-center bg-slate-100 rounded-xl shadow-md`}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className={`bg-${color} w-[300px] flex justify-center items-center py-2 rounded-tl-xl rounded-tr-xl text-lg uppercase font-bold text-white`}
        >
          {vip}
        </div>
        <h1 className="fotn-bo">{text}</h1>
        <ul className="flex flex-col gap-4 justify-start items-start">
          {perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingCard;
