import React from "react";

const ContactUs = () => {
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
    </section>
  );
};

export default ContactUs;
