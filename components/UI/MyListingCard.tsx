import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import { TbPremiumRights } from "react-icons/tb";
import { useAuth } from "@/context/AuthContext";

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
  safety_extras: { ext: string[] };
  comfort_extras: [];
  additionalExtras: [];
  description: string;
  created_at: Date;
  updated_at: Date;
  userId: string;
  imageUrls: string;
};

const MyListingCard = ({ listing }: { listing: Listing }) => {
  const { user } = useAuth();
  const parsedImageUrls = JSON.parse(listing.imageUrls || "[]");
  const previewImage = parsedImageUrls[0] || "/perk1.svg";

  return (
    <Link href={`/listing/${listing.id}`} passHref>
      <section className="max-w-5xl h-auto lg:h-auto w-full flex flex-col lg:flex-row justify-start items-start bg-gradient-to-r from-slate-100 via-white to-slate-100 border-slate-200 shadow-md border-[1px] p-2 lg:p-4 rounded-xl relative">
        <div className="w-full lg:w-2/4">
          <Image
            width={800}
            height={800}
            unoptimized
            className="w-full h-[200px] lg:h-auto object-cover rounded-lg"
            alt={listing.brand}
            src={previewImage}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4 lg:pl-5">
          <h1 className="text-mobilePrimary text-xl 2xl:text-2xl uppercase font-bold mt-2">
            Цена: {listing.price} {listing.currency}
          </h1>
          <div className="w-full flex flex-col">
            <ul className="flex items-center gap-1">
              <li>{listing.brand}</li>
              <li>{listing.model}</li>
              <li>{listing.modification}</li>
              <li>{listing.tuning}</li>
            </ul>
            <h1>{listing.location}</h1>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col justify-start items-start">
            {listing.safety_extras.ext
              .slice(0, 10)
              .map((safe: string, index: number) => (
                <p key={index}>{safe}</p>
              ))}
          </div>
          <div className="w-full lg:w-2/3 flex flex-col text-mobileDarkGray text-sm">
            <div className="w-full flex items-center gap-1">
              <h1>
                дата на произв. - {listing.date_year}г., пробег -{" "}
                {listing.mileage} км,
              </h1>
            </div>
            <div className="w-full flex items-center gap-1">
              цвят - {listing.exterior_color},{" "}
              {listing.description.slice(0, 200)}
              ...
              <h1></h1>
            </div>
          </div>
          {user?.id === listing.userId && (
            <div className="flex items-center text-lg font-medium gap-1 absolute bottom-2 text-mobileDarkGray hover:text-mobilePrimary duration-300 ease-in-out">
              <p>Редактирай</p>
              <AiFillEdit />
            </div>
          )}
        </div>
        {/* <div className="absolute bottom-2 right-2">
        <p>Обявата ще е активна до 30.01.2025 г. 03:01 ч.</p>
      </div> */}
        {user?.id === listing.userId && (
          <div className="flex-col absolute bottom-2 right-2 text-right">
            <ul className="flex gap-4 text-mobileDarkGray">
              <div className="flex items-center gap-1 hover:text-mobilePrimary duration-300 ease-in-out">
                <HiRefresh size={24} />
              </div>
              <div className="flex items-center gap-1 hover:text-mobilePrimary duration-300 ease-in-out">
                <TbPremiumRights size={24} />
              </div>
              <div className="flex items-center gap-1 hover:text-mobilePrimary duration-300 ease-in-out">
                <MdDelete size={24} />
              </div>
            </ul>
          </div>
        )}
      </section>
    </Link>
  );
};

export default MyListingCard;
