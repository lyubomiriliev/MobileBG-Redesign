"use client";

import { additionalExtras } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import Checkbox from "../UI/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../UI/Input";
import { AppDispatch, RootState } from "@/app/store";
import {
  updateAdditionalExtras,
  updateSellerInfo,
} from "@/app/store/listingSlice";

const AdditionalExtra = () => {
  const dispatch = useDispatch<AppDispatch>();

  const savedExtras = useSelector(
    (state: RootState) => state.listing.additionalExtras.add || []
  );
  const savedPhone = useSelector(
    (state: RootState) => state.listing.phoneNumber.num || ""
  );
  const savedEmail = useSelector(
    (state: RootState) => state.listing.email.email || ""
  );
  const savedDescription = useSelector(
    (state: RootState) => state.listing.description.desc || ""
  );

  const [extras, setExtras] = useState<string[]>(savedExtras);
  const [phoneNumber, setPhoneNumber] = useState<string>(savedPhone);
  const [email, setEmail] = useState<string>(savedEmail);
  const [description, setDescription] = useState<string>(savedDescription);

  useEffect(() => {
    setExtras(savedExtras);
    setPhoneNumber(savedPhone);
    setEmail(savedEmail);
    setDescription(savedDescription);
  }, [savedExtras, savedPhone, savedEmail, savedDescription]);

  const handleInputChange = (
    field: "phoneNumber" | "email" | "description",
    value: string
  ) => {
    dispatch(updateSellerInfo({ [field]: value }));

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
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center lg:gap-20 gap-4 z-10">
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
                      checked={extras.includes(extra)}
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
              value={phoneNumber}
              onChange={(value) => handleInputChange("phoneNumber", value)}
            />
          </div>
          <div className="w-full lg:w-1/3 flex py-2">
            <Input
              type="text"
              label="E-mail"
              value={email}
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
            value={description}
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
