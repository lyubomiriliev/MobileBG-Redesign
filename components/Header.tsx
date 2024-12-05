"use client";

import { headerLinks } from "@/utils/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-white flex flex-col gap-1 items-center justify-between fixed top-0 py-2 h-16 md:h-24 z-50">
      <nav className="flex justify-center items-center">
        <div className="flex flex-col py-2 items-center justify-between w-full top-0 fixed px-4">
          <Image src="/mobileLogo.svg" alt="MobileBG" width={120} height={60} />
          <div className="w-full max-w-screen-lg mx-auto justify-center items-center flex">
            <ul className="hidden w-full justify-around lg:flex">
              {headerLinks.map((link, index) => (
                <li className="text-lg cursor-pointer" key={index}>
                  {link.name}
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex">
              <Button text="ДОБАВИ ОБЯВА" />
            </div>
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
