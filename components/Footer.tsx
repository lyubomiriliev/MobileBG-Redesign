import { footerLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-start text-center text-white bg-gradient-to-tr py-5 from-mobilePrimary to-mobilePrimaryDark">
      <nav className="flex flex-col w-full max-w-screen-xl items-center">
        <div className="bg-white relative rounded-md">
          <Image src="/mobileLogo.svg" alt="MobileBG" width={120} height={60} />
        </div>
        <div className="mb-10">
          <h3 className="text-lg lg:text-2xl whitespace-nowrap w-full px-10 md:px-0">
            Вашият доверен партньор в света на автомобилите!
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-10 text-left px-6 lg:px-0">
          {footerLinks.map((col, index) => (
            <div key={index}>
              <h1 className="text-xl font-bold mb-2">{col.title}</h1>
              {col.sublinks.map((sublink, index) => (
                <Link href={sublink.link} key={index}>
                  <p>{sublink.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <span className="mt-10">
          &copy; {new Date().getFullYear()}. Website created by{" "}
          <span className="font-bold underline">Lyubomir.Dev</span>
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
