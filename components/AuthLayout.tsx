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
      <div className="innerSection">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-xl lg:text-2xl">{title}</h1>
            <p className="text-lg text-mobileDarkGray">{subTitle}</p>
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
