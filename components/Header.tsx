"use client";

import { FiLogOut } from "react-icons/fi";

import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import {
  headerLinks,
  headerLinksMobile,
  UserInfoData,
} from "@/utils/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/app/lib/supabase";
import { useListingContext } from "@/context/ListingContext";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfoData>();

  const { clearImages } = useListingContext();

  const { session, signOut } = useAuth();
  const userEmail = session?.user.email;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  return (
    <header className="w-full bg-white/75 backdrop-blur-md flex flex-col gap-1 items-center justify-between fixed top-0 py-2 h-16 md:h-20 z-[999] shadow-md">
      <nav className="justify-center items-center hidden lg:flex">
        <div className="flex flex-col h-20 items-center justify-center w-full top-0 fixed px-4">
          <div className="w-full max-w-screen-lg mx-auto justify-center items-center flex">
            <ul className="hidden w-full justify-around lg:flex items-center">
              {headerLinks.map((link, index) => (
                <Link key={index} href={link.url}>
                  <li className="text-xl font-medium hover:text-mobilePrimary duration-300 ease-in-out cursor-pointer">
                    {link.name}
                  </li>
                  {link.src && (
                    <Image
                      className="hover:scale-110 duration-300 ease-in-out"
                      src="/mobileLogo.svg"
                      alt="MobileBG"
                      width={120}
                      height={60}
                    />
                  )}
                </Link>
              ))}
            </ul>
            <Link href="/listings/publish">
              <div className="hidden lg:flex">
                <Button icon="/addIcon.svg" text="ДОБАВИ ОБЯВА" />
              </div>
            </Link>
            {session?.user ? (
              <Link href="/listings">
                <div className="px-4 flex items-center gap-4">
                  <div className="group flex flex-col items-center cursor-pointer">
                    <FaUser
                      className="text-mobilePrimary group-hover:text-mobileDarkGray duration-300 ease-in"
                      size={20}
                    />
                    <span className="text-mobilePrimary group-hover:text-mobileDarkGray duration-300 ease-in text-sm whitespace-nowrap font-bold">
                      {userInfo?.first_name}
                    </span>
                  </div>

                  <p
                    onClick={handleSignOut}
                    className="font-bold text-mobileDarkGray hover:text-mobilePrimary duration-300 transition-all ease-in cursor-pointer"
                  >
                    <FiLogOut size={24} />
                  </p>
                </div>
              </Link>
            ) : (
              <Link
                className="hover:text-mobilePrimary duration-300 ease-in-out"
                href="/login"
              >
                <div className="flex items-center gap-2 px-4">
                  <FaRegUser size={20} />
                  <p className="font-bold cursor-pointer">Вход</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full z-50 flex items-center justify-between h-24 lg:hidden px-4 relative">
        <div className="absolute left-4 top-2">
          <button
            className={`flex lg:hidden ${
              menuOpen ? "text-mobilePrimary" : "text-black"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
          </button>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/">
            <Image
              src="/mobileLogo.svg"
              alt="MobileBG"
              width={120}
              height={60}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="absolute right-4 top-3">
          {session?.user ? (
            <Link href="/listings">
              <FaUser size={20} className="text-mobilePrimary" />
              <div className="w-[20px] h-[3px] bg-mobilePrimary absolute right-0 top-6"></div>
            </Link>
          ) : (
            <Link href="/login">
              <div className="flex items-center gap-1">
                <FaRegUser size={20} />
                <p className="font-bold cursor-pointer">Вход</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="w-full h-screen fixed inset-0 flex flex-col items-center justify-center bg-white/95">
          <div className="w-full flex flex-col gap-4 h-[84%] justify-start items-start px-4">
            {headerLinksMobile.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-black hover:text-mobilePrimary duration-300 ease-in p-2 font-semibold text-2xl uppercase py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {session?.user && (
              <div
                className="flex items-center uppercase text-2xl gap-1 px-2"
                onClick={handleSignOut}
              >
                <p className="font-bold text-mobilePrimary duration-300 transition-all ease-in cursor-pointer">
                  Изход
                </p>
                <FiLogOut className="text-mobilePrimary" size={24} />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
