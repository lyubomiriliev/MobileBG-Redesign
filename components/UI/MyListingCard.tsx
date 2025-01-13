import Image from "next/image";
import Link from "next/link";
import React from "react";

type Listing = {
  id: string | number;
  category: string;
  brand: string;
  model: string;
  modification: string;
  tuning: string;
  engine: string;
  gearbox: string;
  vin: string;
  price: number;
  currency: string;
  mileage: number;
  location: string;
  litres: string;
  euro: string;
  horsePower: string;
  phoneNumber: string;
  date_year: number;
  date_month: string;
  exterior_color: string;
  interior_material: string;
  interior_color: string;
  multimedia_extras: [];
  safety_extras: [];
  comfort_extras: [];
  additionalExtras: [];
  description: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  imageUrls: string;
};

const MyListingCard = ({ listing }: { listing: Listing }) => {
  const parsedImageUrls = JSON.parse(listing.imageUrls || "[]");
  const previewImage = parsedImageUrls[0] || "/perk1.svg";

  return (
    <Link href={`/listing/${listing.id}`} passHref>
      <section className="max-w-5xl w-full flex justify-center items-start bg-gradient-to-r from-slate-100 via-white to-slate-100 border-slate-200 shadow-md border-[1px] p-4 rounded-xl relative">
        <div className="w-2/5 flex flex-col">
          <Image
            width={100}
            height={100}
            className="w-56 h-56 object-cover rounded-lg"
            alt={listing.brand}
            src={previewImage}
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
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h1 className="text-mobilePrimary text-xl 2xl:text-2xl uppercase font-bold">
            Цена: {listing.price} {listing.currency}
          </h1>
          <div className="flex flex-col">
            <ul className="flex items-center gap-1">
              <li>{listing.brand}</li>
              <li>{listing.model}</li>
              <li>{listing.modification}</li>
              <li>{listing.tuning}</li>
            </ul>
            <h1>{listing.location}</h1>
          </div>
          <div className="w-2/3 flex flex-col text-mobileDarkGray text-sm">
            <div className="w-full flex items-center gap-1">
              <h1>
                дата на произв. - {listing.date_year}г., пробег -{" "}
                {listing.mileage} км,
              </h1>
            </div>
            <div className="w-full flex items-center gap-1">
              цвят - {listing.exterior_color},{" "}
              {listing.description.slice(0, 120)}
              ...
              <h1></h1>
            </div>
          </div>
          <p>Редактирай обявата</p>
        </div>
        {/* <div className="absolute bottom-2 right-2">
        <p>Обявата ще е активна до 30.01.2025 г. 03:01 ч.</p>
      </div> */}
        <div className="flex flex-col absolute top-2 right-2 text-right">
          <ul className="flex flex-col">
            <li>Разгледай обявата</li>
            <li>Обнови обявата</li>
            <li>Промотирай</li>
            <li>Изтрий</li>
          </ul>
        </div>
      </section>
    </Link>
  );
};

export default MyListingCard;
