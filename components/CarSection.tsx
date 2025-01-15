import Image from "next/image";
import React from "react";

const CarSection = () => {
  return (
    <section className="w-full h-[35vh] lg:h-[75vh] flex flex-col justify-start items-center mx-auto relative">
      <Image
        src="/images/mobileCar2.png"
        width={1920}
        height={1000}
        unoptimized
        alt="/"
        className="w-full lg:w-[55%] -top-[60px] lg:-top-24 absolute -z-10"
      />
      <div className="absolute -bottom-4 lg:-bottom-48 whitespace-nowrap left-12 lg:left-1/3">
        <h1 className="text-4xl uppercase lg:text-6xl text-black lg:text-white absolute bottom-6 left-[16%] lg:bottom-80 lg:left-[35%] z-20">
          Подбрани категории
        </h1>
      </div>
      <Image
        src="/images/blueVector.svg"
        width={1920}
        height={1000}
        alt="/"
        className="w-full absolute -top-[10%] lg:-top-[270px] -z-20"
      />
    </section>
  );
};

export default CarSection;
