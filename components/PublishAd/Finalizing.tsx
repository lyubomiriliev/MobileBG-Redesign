"use client";

import React, { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import ListingReview from "./ListingReview";
import { listings } from "@/utils/constants";
import ListingCard from "../UI/ListingCard";
import Button from "../Button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/redux";
import { useAuth } from "@/context/AuthContext";
import { useListingContext } from "@/context/ListingContext";

const Finalizing = () => {
  const listingData = useSelector((state: RootState) => state.listing);

  const { images } = useListingContext();

  console.log(images[0]);

  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handlePublishListing = async () => {
    setUploading(true);

    try {
      // Step 1: Create Listing
      const response = await fetch("/api/listings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...listingData, userId: user?.id }),
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
          const fileName = `listings/${listingId}/${Date.now()}_${image.name}`;

          console.log(image);
          const { data: uploadData, error: uploadError } =
            await supabase.storage.from("media").upload(fileName, image);

          if (uploadError) throw uploadError;

          console.log("Upload Success:", uploadData);

          const { data: publicUrlData } = supabase.storage
            .from("media")
            .getPublicUrl(uploadData.path);

          if (!publicUrlData.publicUrl) {
            throw new Error("Failed to generate public URL for image.");
          }

          uploadedUrls.push(publicUrlData.publicUrl);
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

      localStorage.removeItem("previewUrls");

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
      <div onClick={handlePublishListing} className="z-50">
        <Button text={`ПУБЛИКУВАЙ`} />
      </div>
    </section>
  );
};

export default Finalizing;
