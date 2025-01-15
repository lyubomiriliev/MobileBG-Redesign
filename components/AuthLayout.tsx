import React, { ReactNode } from "react";
import Image from "next/image";

const AuthLayout = ({
  title,
  subTitle,
  imageSrc,
  children,
}: {
  title: string;
  subTitle: string;
  imageSrc: string;
  children: ReactNode;
}) => {
  return (
    <section className="basicSection">
      <div className="innerSection !pt-6">
        <div className="w-full  flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center pb-4">
            <h1 className="text-4xl uppercase text-mobilePrimary font-semibold lg:text-5xl">
              {title}
            </h1>
            <p className="text-xl text-mobileDarkGray">{subTitle}</p>
          </div>
        </div>
        <div className="z-50 w-full">{children}</div>
        <div className="absolute -right-10 -bottom-10">
          <Image
            src={imageSrc}
            width={600}
            height={300}
            alt="BackgroundImg"
            className="opacity-75"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
