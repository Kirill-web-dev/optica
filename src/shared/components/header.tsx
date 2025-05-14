"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const routes = [
  { title: "О нас", link: "about" },
  { title: "Услуги", link: "services" },
  { title: "Больше о нас", link: "more_about" },
  { title: "Коллектив", link: "team" },
  { title: "Бренды", link: "brends" },
  { title: "Контакты", link: "contacts" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold cursor-pointer">Оптика На Комсомольском, 37</h1>

        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul className="hidden md:flex gap-4 text-sm sm:text-base">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={`#${route.link}`} className="hover:underline">
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pt-2 pb-4 flex flex-col gap-3 bg-white ">
          {routes.map((route, index) => (
            <li key={index}>
              <Link href={`#${route.link}`} className="block py-2 border-b border-gray-200" onClick={() => setIsOpen(false)}>
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
