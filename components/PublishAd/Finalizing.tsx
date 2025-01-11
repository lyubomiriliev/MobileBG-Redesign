"use client";

import { listings } from "@/utils/constants";
import React, { useState } from "react";
import ListingCard from "../UI/ListingCard";
import ListingReview from "./ListingReview";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/redux";
import { supabase } from "@/app/lib/supabase";

const Finalizing = () => {
  const listingData = useSelector((state: RootState) => state.listing);
  const images = useSelector(
    (state: RootState) => state.listing.uploadedImages.image
  );

  console.log(images);

  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const prices = ["(0.00лв)", "(4.99лв)", "(9.99лв)"];

  const handleNext = async () => {
    setUploading(true);

    if (!images.length) {
      alert("Please upload at least one image.");
      setUploading(false);
      return;
    }

    try {
      // Step 1: Create Listing
      const response = await fetch("/api/listings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(listingData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create listing.");
      }

      const listingId = result.id;

      // Step 2: Upload Images and Associate with Listing
      const uploadedUrls = [];

      for (const image of images) {
        if (image) {
          console.log("Uploading file:", image);
          const { data: uploadData, error: uploadError } =
            await supabase.storage
              .from("media")
              .upload(`listings/${listingId}/${Date.now()}`, image);

          if (uploadError) throw uploadError;

          const { data: publicUrlData } = supabase.storage
            .from("media")
            .getPublicUrl(uploadData.path);

          const publicUrl = publicUrlData.publicUrl;

          if (!publicUrl) {
            throw new Error("Failed to generate public URL for image.");
          }

          uploadedUrls.push(publicUrl);
        }
      }

      // Step 3: Save Media URLs in Database
      const { error: dbError } = await supabase.from("media").insert(
        uploadedUrls.map((url) => ({
          listing_id: listingId,
          type: "image",
          url,
        }))
      );

      if (dbError) throw dbError;

      alert("Listing created and images uploaded successfully!");
    } catch (error: any) {
      console.error("Error:", error.message);
      alert("Failed to create listing or upload images.");
    } finally {
      setUploading(false);
      router.push(`/listings/published`);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center max-w-screen-xl mx-auto px- pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-centeri items-center py-4 gap-4">
        <h1 className="text-xl lg:text-3xl">
          Публикуване - избор на тип обява и срок
        </h1>
        <h3 className="text-lg lg:text-2xl">Преглед на обявата ви</h3>
      </div>
      <ListingReview />
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
      <div onClick={handleNext} className="z-50">
        <Button text={`ПУБЛИКУВАЙ ${prices[1]}`} />
      </div>
    </section>
  );
};

export default Finalizing;
