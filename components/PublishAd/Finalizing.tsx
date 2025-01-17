"use client";

import React, { useState } from "react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import ListingReview from "./ListingReview";
import { listingOptions } from "@/utils/constants";
import ListingCard from "../UI/ListingCard";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/context/AuthContext";
import { useListingContext } from "@/context/ListingContext";
import { AppDispatch, RootState } from "@/app/store";
import { resetListing, updatePromotedType } from "@/app/store/listingSlice";

const Finalizing = () => {
  const listingData = useSelector((state: RootState) => state.listing);
  const listingDesc = useSelector(
    (state: RootState) => state.listing.description.desc
  );
  const listingPhoneNumber = useSelector(
    (state: RootState) => state.listing.phoneNumber.num
  );

  console.log(listingData);

  const dispatch = useDispatch<AppDispatch>();
  const [selectedOption, setSelectedOption] = useState("BASIC");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    dispatch(updatePromotedType(option));
  };

  const { images } = useListingContext();
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handlePublishListing = async () => {
    setUploading(true);

    try {
      const uploadedUrls = [];

      // Step 1: Upload Images to Supabase Storage and Collect URLs
      for (const image of images) {
        if (image) {
          const fileName = `listings/${user?.id}/${Date.now()}_${image.name}`;

          const { data: uploadData, error: uploadError } =
            await supabase.storage.from("media").upload(fileName, image);

          if (uploadError) throw uploadError;

          const { data: publicUrlData } = supabase.storage
            .from("media")
            .getPublicUrl(uploadData.path);

          if (!publicUrlData.publicUrl) {
            throw new Error("Failed to generate public URL for image.");
          }

          uploadedUrls.push(publicUrlData.publicUrl);
        }
      }

      // Step 2: Create Listing with Image URLs
      const response = await fetch("/api/listings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...listingData,
          description: listingDesc,
          userId: user?.id,
          imageUrls: uploadedUrls, // Pass the URLs of the uploaded images
          phoneNumber: listingPhoneNumber,
          isPromoted: selectedOption,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create listing.");
      }

      // Step 3: Save Media URLs in Database
      const listingId = result.id;

      const { error: dbError } = await supabase.from("media").insert(
        uploadedUrls.map((url) => ({
          listing_id: listingId,
          type: "image",
          url,
        }))
      );

      if (dbError) throw dbError;

      localStorage.removeItem("previewUrls");
      localStorage.removeItem("interiorExteriorData");
      localStorage.removeItem("innerStep");
      localStorage.setItem("postedListingId", result.id);
      alert("Listing created and images uploaded successfully!");
      router.push(`/listings/published`);

      dispatch(resetListing());
    } catch (error: any) {
      console.error("Error:", error.message);
      alert("Failed to create listing or upload images.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="w-full flex flex-col justify-start items-center max-w-screen-xl mx-auto px-2 pb-8 lg:px-0">
      <div className="w-full flex flex-col justify-center items-center py-4 gap-4">
        <h1 className="text-2xl text-center lg:text-3xl">
          Публикуване - избор на тип обява и срок
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h3 className="text-2xl lg:text-2xl mb-4">Преглед на обявата ви</h3>
        <ListingReview />
      </div>

      <div className="w-full flex flex-col items-center py-6">
        <h1 className="text-2xl lg:text-2xl mb-4">Избор на тип обява</h1>
        <div className="w-full flex justify-center items-start gap-6 p-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
          {listingOptions.map((item, index) => (
            <div
              onClick={() => handleOptionSelect(item.name)}
              className={`w-full h-full ${
                selectedOption === item.name
                  ? "border-[4px] rounded-[14px] border-mobilePrimary"
                  : ""
              }`}
              key={index}
            >
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
