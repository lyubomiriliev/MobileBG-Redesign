"use client";

import { RootState } from "@/app/store/redux";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ListingReview = () => {
  const [firstImage, setFirstImage] = useState<string | null>(null);
  const safetyExtras = useSelector(
    (state: RootState) => state.listing.safetyExtras.ext
  );
  const vehicleData = useSelector(
    (state: RootState) => state.listing.generalData
  );

  useEffect(() => {
    // Get and parse the previewUrls array from localStorage
    const storedUrls = localStorage.getItem("previewUrls");
    if (storedUrls) {
      const urls = JSON.parse(storedUrls);
      if (Array.isArray(urls) && urls[0]) {
        setFirstImage(urls[0]); // Set the first image URL
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-start items-start bg-slate-100 rounded-lg p-4">
      <div>
        {firstImage ? (
          <Image
            alt="CarImg"
            width={400}
            height={400}
            src={firstImage}
            className="w-60 h-60 object-cover rounded-lg"
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        <div className="flex flex-col items-start px-4">
          <h3 className="text-mobilePrimary font-bold text-xl">
            Цена: {vehicleData.price + " " + vehicleData.currency}
          </h3>
          <h3>
            {vehicleData.brand +
              " " +
              vehicleData.model +
              " " +
              vehicleData.modification}
          </h3>
          <h3>гр. {vehicleData.location}</h3>
        </div>
        <div className="flex items-center px-4 gap-2">
          <p>
            {vehicleData.dateYear +
              "г." +
              " " +
              vehicleData.dateMonth +
              " " +
              vehicleData.mileage +
              "км"}
          </p>
        </div>
        <div className="flex flex-col items-start px-4 text-sm text-gray-600">
          {safetyExtras.slice(0, 3).map((extra, index) => (
            <div key={index}>
              <h3>{extra}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingReview;
