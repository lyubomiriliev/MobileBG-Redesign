import React from "react";

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
      className={`w-[300px] h-[450px] lg:h-auto flex flex-col justify-start cursor-pointer items-center bg-slate-100 rounded-xl shadow-md`}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          style={{ backgroundColor: color }}
          className="w-[300px] flex justify-center items-center py-2 rounded-tl-[10px] rounded-tr-[10px] text-lg uppercase font-bold text-white"
        >
          {vip}
        </div>
        <h1 className="font-semibold uppercase text-xl">{text}</h1>
        <ul className="flex flex-col gap-4 justify-start items-start p-6 text-center">
          {perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingCard;
