import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center text-center text-white h-40 bg-gradient-to-tr from-mobilePrimary to-mobilePrimaryDark">
      <nav className="flex flex-col justify-between h-full items-center">
        <div className="bg-white relative rounded-md">
          <Image src="/mobileLogo.svg" alt="MobileBG" width={120} height={60} />
        </div>
        <div className="mt-2">
          <h3 className="text-2xl w-full px-10 md:px-0">
            Намерете това, което ви подхожда в №1 сайт за автомобили в България!
          </h3>
        </div>
        <span>Copyright&copy;2024. Website created by Lyubomir.Dev</span>
      </nav>
    </footer>
  );
};

export default Footer;
