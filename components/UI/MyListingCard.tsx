import Image from "next/image";
import React from "react";

const MyListingCard = () => {
  return (
    <section className="max-w-5xl w-full flex items-start bg-gradient-to-r from-slate-100 via-white to-slate-100 border-slate-200 shadow-md border-[1px] p-4 rounded-xl relative">
      <div className="w-2/4 flex flex-col">
        <Image
          width={100}
          height={100}
          className="w-56 h-56 object-cover rounded-lg"
          alt="CarImg"
          src="/car1.png"
        />
        <div className="flex flex-col gap-1 mt-4">
          <div className="flex flex-col">
            <p className="text-sm">Брой на преглеждания:</p>
            <span className="text-mobilePrimary font-bold text-sm">
              1484 (нулирай)
            </span>
          </div>
          <div className="flex flex-col max-w-40">
            <p className="text-sm">
              Брой на абонирания за промяна в цената:{" "}
              <span className="text-mobilePrimary font-bold">28</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="text-mobilePrimary font-bold">Цена: 58 000лв</h1>
        <div className="flex flex-col">
          <h1>BMW X3 30d xDrive M-Sport Facelift (нова обява)</h1>
          <h1>обл. София, гр. София</h1>
        </div>
        <div className="w-2/3 text-mobileDarkGray text-sm">
          дата на произв. - май 2012 г., пробег - 153000 км, цвят - Тъмно сив, А
          класа 180 бензин автоматик в много добро състоян... Особености - 4(5)
          Врати, Bluetooth \ handsfree система, St...
        </div>
        <p>Редактирай обявата</p>
      </div>
      <div className="absolute bottom-2 right-2">
        <p>Обявата ще е активна до 30.01.2025 г. 03:01 ч.</p>
      </div>
      <div className="flex flex-col absolute top-2 right-2 text-right">
        <ul className="flex flex-col">
          <li>Разгледай обявата</li>
          <li>Обнови обявата</li>
          <li>Промотирай</li>
          <li>Изтрий</li>
        </ul>
      </div>
    </section>
  );
};

export default MyListingCard;
