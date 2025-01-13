"use client";

import { FiLogOut } from "react-icons/fi";

import { headerLinks } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useListingContext } from "@/context/ListingContext";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  return (
    <header className="w-full bg-white/75 backdrop-blur-md flex flex-col gap-1 items-center justify-between fixed top-0 py-2 h-16 md:h-20 z-50">
      <nav className="flex justify-center items-center">
        <div className="flex flex-col h-20 items-center justify-center w-full top-0 fixed px-4">
          <div className="w-full max-w-screen-lg mx-auto justify-center items-center flex">
            <ul className="hidden w-full justify-around lg:flex items-center">
              {headerLinks.map((link, index) => (
                <Link key={index} href={link.url}>
                  <li className="text-lg cursor-pointer">{link.name}</li>
                  {link.src && (
                    <Image
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
              <div className="px-4 flex items-center gap-4">
                <p>
                  Добре дошъл,{" "}
                  <span className="text-mobilePrimary font-bold">
                    {session?.user.email}
                  </span>
                </p>
                <p
                  onClick={handleSignOut}
                  className="font-bold text-mobileDarkGray hover:text-mobilePrimary duration-300 transition-all ease-in cursor-pointer"
                >
                  <FiLogOut size={24} />
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4">
                <Link href="/login">
                  <p className="font-bold cursor-pointer">Вход</p>
                </Link>
                <div className="w-[1px] h-6 bg-mobileDarkGray"></div>
                <Link href="/register">
                  <p className="font-bold cursor-pointer">Регистрация</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="w-full flex items-center justify-between lg:hidden px-4">
        <button
          className="flex lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
        <Button text="ОБЯВА" />
      </div>

      {menuOpen && (
        <div className="fixed top-0 w-full flex flex-col">
          {headerLinks.map((link, index) => (
            <button key={index} className="text-black">
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
