"use client";

import { additionalExtras } from "@/utils/constants";
import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../UI/Input";
import { AppDispatch, RootState } from "@/app/store";
import {
  updateAdditionalExtras,
  updateSellerInfo,
} from "@/app/store/listingSlice";

const AdditionalExtra = () => {
  const [extras, setExtras] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const listingData = useSelector((state: RootState) => state.listing);
  console.log("Current Redux State:", listingData);

  const handleInputChange = (
    field: "phoneNumber" | "email" | "description",
    value: string
  ) => {
    dispatch(
      updateSellerInfo({
        [field]: value,
      })
    );
    if (field === "phoneNumber") setPhoneNumber(value);
    if (field === "email") setEmail(value);
    if (field === "description") setDescription(value);
  };

  const handleCarExtras = (ext: string) => {
    let updatedExtras = [...extras];
    if (updatedExtras.includes(ext)) {
      updatedExtras = updatedExtras.filter((item) => item !== ext);
    } else {
      updatedExtras.push(ext);
    }
    setExtras(updatedExtras);
    dispatch(updateAdditionalExtras(updatedExtras));
  };

  const contactMail = useSelector((state: RootState) => state.listing.email);
  const contactPhone = useSelector(
    (state: RootState) => state.listing.phoneNumber
  );
  const contactDesc = useSelector(
    (state: RootState) => state.listing.description
  );

  console.log("Mail", contactMail, "Phone", contactPhone, "Desc", contactDesc);

  return (
    <section className="mainSection">
      <div className="w-full flex flex-col justify-center items-start">
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl lg:text-2xl">
            Оборудване, сигурност, екстри и функции
          </h1>
          <div className="w-full lg:w-2/3 h-[2px] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 my-3"></div>
          <h3 className="text-xl lg:text-2xl">Допълнителни екстри (5/5)</h3>
        </div>
        <div className="flex flex-col justify-center gap-4 z-10">
          {additionalExtras.map((item, index) => (
            <div key={index}>
              <h1 className="text-xl lg:text-2xl font-bold text-mobilePrimary">
                {item.name}
              </h1>
              <div>
                {item.extras.map((extra, index) => (
                  <div key={`${extra}-${index}`}>
                    <Checkbox
                      onChange={() => handleCarExtras(extra)}
                      label={extra}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center items-start py-6">
          <div className="w-full lg:w-1/3 flex py-2">
            <Input
              type="text"
              label="Телефонен номер"
              value={phoneNumber || ""}
              onChange={(value) => handleInputChange("phoneNumber", value)}
            />
          </div>
          <div className="w-full lg:w-1/3 flex py-2">
            <Input
              type="text"
              label="E-mail"
              value={email || ""}
              onChange={(value) => handleInputChange("email", value)}
            />
          </div>
          <h1 className="text-xl lg:text-2xl">Допълнителна информация</h1>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("description", e.target.value)
            }
            className="border-[1px] border-gray-300 resize-none rounded-lg w-full h-80 p-2"
            placeholder="Попълнете информацията за автомобила ви. Максимален размер до 1000 символа."
            name="description"
            id="description"
          ></textarea>
          <label className="text-mobilePrimary">
            Моля не пишете телефонни номера в това поле!
          </label>
        </div>
      </div>
    </section>
  );
};

export default AdditionalExtra;
