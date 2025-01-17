"use client";

import React, { useState } from "react";
import { Input } from "./UI/Input";
import Button from "./Button";

const ContactUs = () => {
  type ContactForm = {
    email: string;
    phoneNumber: string;
    subject: string;
    contactText: string;
  };

  const [formData, setFormData] = useState<ContactForm>({
    email: "",
    phoneNumber: "",
    subject: "",
    contactText: "",
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <section className="w-full flex flex-col justify-center items-center max-w-screen-xl mx-auto py-8 gap-4">
      <div>
        <h1 className="text-4xl">Свържете се с нас</h1>
      </div>
      <div className="w-full lg:w-2/3 flex justify-center items-center text-center px-4 lg:px-0">
        <p className="text-xl">
          Имате въпроси или нужда от помощ? Нашият екип за обслужване на клиенти
          е на разположение, за да ви помогне. Свържете се с нас по телефон,
          имейл или чрез формата за контакт по-долу
        </p>
      </div>
      <div className="w-full max-w-4xl flex flex-col justify-center items-start p-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          <div className="w-full flex py-2">
            <Input
              type="text"
              label="Вашият телефон"
              value={formData.phoneNumber}
              onChange={(value) => handleInputChange("phoneNumber", value)}
            />
          </div>
          <div className="w-full flex py-2">
            <Input
              type="text"
              label="Вашият E-mail"
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
            />
          </div>
          <div className="w-full flex py-2">
            <Input
              type="text"
              label="Тема"
              value={formData.subject}
              onChange={(value) => handleInputChange("subject", value)}
            />
          </div>
        </div>

        <h1 className="text-xl lg:text-2xl">Вашето запитване</h1>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange("contactText", e.target.value)
          }
          className="border-[1px] border-gray-300 resize-none rounded-lg w-full h-80 p-2"
          placeholder="Максимум до 1500 символа"
          name="contactText"
          id="contactText"
          value={formData.contactText}
        ></textarea>
        <div className="w-full flex justify-center items-center pt-4">
          <div className="w-2/4 lg:w-1/3">
            <Button text="Изпрати" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
