"use client";

import DealerCard from "@/components/DealerCard";
import { Dropdown } from "@/components/UI/Dropdown";
import { Input } from "@/components/UI/Input";
import { authorizedDealers } from "@/utils/constants";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    place: "",
  });

  const handleChange = (field: string, value: string) => {
    if (field === "location") {
      setFormData({ ...formData, place: value });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  return (
    <section className="basicSection">
      <div className="innerSection !items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-2xl">Дилъри</h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3>Списък на регистрираните автодилъри в България</h3>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-4 pt-10">
          <div className="w-full lg:w-1/3">
            <Dropdown
              label="Локация"
              options={["София", "Варна", "Бургас"]}
              value={formData.place}
              onChange={(value) => handleChange("place", value)}
            />
          </div>
          <div className="w-full lg:w-2/3">
            <Input label="Търси по име" value="Wincars" />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
          {authorizedDealers.map((dealer, index) => (
            <div key={index}>
              <DealerCard
                name={dealer.name}
                phone={dealer.phone}
                logo={dealer.location}
                location={dealer.location}
                date={dealer.dateJoined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
