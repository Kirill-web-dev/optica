"use client";

import { Map } from "./map";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white shadow-lg py-12 w-full border-t mt-10 px-4 sm:px-6 lg:px-[100px]" id="contacts">
      <Map />

      <div className="leading-8 w-full lg:w-auto text-center lg:text-left">
        <h1 className="font-semibold text-2xl text-blue-500 mb-4">Контакты</h1>
        <p className="text-black font-semibold">
          Телефон:{" "}
          <a href="tel:84956282766" className="underline text-blue-500/80">
            8(495)628-27-66
          </a>
          ,{" "}
          <a href="tel:84956091338" className="underline text-blue-500/80">
            8(495)609-13-38
          </a>
        </p>

        <p className="text-black font-semibold">
          Почта:{" "}
          <a href="mailto:info@optician.ru" className="underline text-blue-500/80">
            info@optician.ru
          </a>
        </p>
        <p className="text-black font-semibold">
          Время работы: <span className="text-gray-400">пн-пт 10:00–20:00, сб-вс 11:00–20:00</span>
        </p>
        <p className="text-black font-semibold">
          Адрес: <span className="text-gray-400">ул. 3-я Фрунзенская, дом 14/37 (вход с Комсомольского пр, 37)</span>
        </p>
      </div>
    </footer>
  );
};
