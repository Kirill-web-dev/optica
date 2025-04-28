import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Header } from "@/shared/components/header";

import "./globals.css";
import { Footer } from "@/shared/components/footer";

const nunito = Nunito({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Оптика На Комсомольском",
  description:
    "Если вам от 18 до 60 лет и у вас есть проблемы со зрением, то мы обязательно вам поможем. Так же мы предлагаем свои услуги людям, которые ищут самые модные оправы для очков, солнцезащитные очки, поможем с ремонтом ваших очков, поможем выбрать самые подходящие контактные линзы для вас.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${nunito.className} overflow-x-hidden antialiased w-full min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
