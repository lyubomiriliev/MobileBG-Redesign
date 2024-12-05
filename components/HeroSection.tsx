import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <Image
        src="/heroImg.jpg"
        alt="BGImage"
        width={1200}
        height={600}
        unoptimized
        className="w-full h-[80vh] object-cover"
      />
      <div className="flex flex-col items-center justify-center absolute">
        <h1>БЪДЕТЕ МОБИЛНИ</h1>
        <h3>
          Намерете това, което ви подхожда в №1 сайт за автомобили в България!
        </h3>
        <div className="flex items-center gap-10 mt-10">
          <button>ТОП ОБЯВИ</button>
          <button>ТЪРСЕНЕ</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
