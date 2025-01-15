"use client";

import MyListingCard from "@/components/UI/MyListingCard";
import { useAuth } from "@/context/AuthContext";
import { Listing, UserInfoData } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "@/components/Button";
import { FiLogOut } from "react-icons/fi";
import { useListingContext } from "@/context/ListingContext";

const MyListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });
  const { user } = useAuth();
  const userEmail = user?.email;

  const { session, signOut } = useAuth();
  const { clearImages } = useListingContext();

  const handleSignOut = async () => {
    try {
      await signOut();
      clearImages();
      localStorage.removeItem("previewUrls");
      window.location.href = "/";
      alert("Logged out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", userEmail)
          .single();

        if (error) {
          console.error("Error fetching user data", error);
        }

        if (data) {
          setUserInfo(data);
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]);

  useEffect(() => {
    const fetchUserListings = async () => {
      if (!user?.id) {
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `/api/listings/getUserListingById?userId=${user.id}`
        );
        const data = await response.json();

        if (response.ok) {
          setListings(data);
        } else {
          console.error("Error fetching user listings", data.error);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching listings:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserListings();
  }, [user?.id]);

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const { error } = await supabase
        .from("users")
        .update({
          first_name: userInfo.first_name,
          last_name: userInfo.last_name,
        })
        .eq("email", userEmail); // Ensure the correct user is updated

      if (error) {
        console.error("Error updating user data:", error);
        alert("Failed to update user data.");
        return;
      }

      alert("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("An error occurred while updating user data.");
    }
  };

  return (
    <section className="basicSection !max-w-4xl">
      <div className="w-full flex flex-col rounded-xl relative justify-center items-start p-2 lg:p-4 shadow-md bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 border-[1px] border-slate-200">
        <div className="w-full flex justify-center items-center gap-4 pb-6">
          <h1 className="text-xl lg:text-3xl">Потребителски данни</h1>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 ">
          <div className="w-full flex flex-col">
            <label htmlFor="">Вашето име</label>
            <input
              className="w-full border border-gray-300 rounded-md p-1.5"
              type="text"
              value={userInfo?.first_name || ""}
              onChange={(e) => handleInputChange("first_name", e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Вашата фамилия</label>
            <input
              className="w-full border border-gray-300 rounded-md p-1.5"
              type="text"
              value={userInfo?.last_name || ""}
              onChange={(e) => handleInputChange("last_name", e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Потребителско име</label>
            <input
              className="w-full border border-gray-300 rounded-md p-1.5"
              type="text"
              value={userInfo?.username || ""}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Вашият e-mail</label>
            <input
              disabled
              className="w-full border border-gray-300 rounded-md p-1.5"
              type="text"
              value={userInfo?.email || ""}
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center pt-4">
          <Button text="Запази промените" onClick={handleSaveChanges} />
        </div>
        <div
          className="flex items-center gap-1 absolute top-2 right-2"
          onClick={handleSignOut}
        >
          <p className="font-bold text-mobileDarkGray hover:text-mobilePrimary duration-300 transition-all ease-in cursor-pointer">
            Изход
          </p>
          <FiLogOut size={24} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-6">
        <h1 className="text-xl lg:text-3xl">Моите обяви</h1>
      </div>
      <div className="w-full flex flex-col justify-start items-start py-10">
        {listings.length > 0 ? (
          <div className="w-full flex flex-col justify-start items-start">
            <p>Списък и управление на публикуваните от Вас обяви.</p>
            <p>Имате {listings.length} активни обяви.</p>
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col gap-4 items-center relative">
        {loading ? (
          <p className="text-2xl text-mobileDarkGray">
            Зареждане на обявите...
          </p>
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <MyListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p className="text-2xl text-mobileDarkGray">
            Нямате публикувани обяви.
          </p>
        )}
        {listings.length > 0 ? (
          <div className="w-32 h-8 bg-mobilePrimary text-white flex justify-center items-center rounded-tr-2xl rounded-tl-2xl absolute -top-8 left-6">
            Активни обяви
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default MyListingsPage;
