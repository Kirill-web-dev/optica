import { AnimateOnView } from "@/shared/components/animate-on-view";
import { Card, CardContent, CardDescription } from "@/shared/components/ui/card";
import { Eye, Glasses, Hammer } from "lucide-react";

import Image from "next/image";

const services = [
  {
    title: "Диагностика зрения",
    icon: Eye,
  },
  {
    title: "Подбор оправ",
    icon: Glasses,
  },
  {
    title: "Изготовление и ремонт очков",
    icon: Hammer,
  },
];

const brends = [
  {
    title: "Cartier",
    image: "/logos/Cartier_(jeweler)-Logo.wine.svg",
  },
  {
    title: "D&G",
    image: "/logos/Dolce_&_Gabbana-Logo.wine.svg",
  },
  {
    title: "Gotti",
    image: "/logos/gotti_logo.png",
  },
  {
    title: "Gucci",
    image: "/logos/Gucci-Logo.wine.svg",
  },
  {
    title: "Guess",
    image: "/logos/Guess_Logo.svg",
  },
  {
    title: "Chopard",
    image: "/logos/Logo_Chopard.svg",
  },
  {
    title: "Saint Laurent",
    image: "/logos/Logo_of_Yves_Saint_Laurent_SAS.svg",
  },
  {
    title: "MaxMara",
    image: "/logos/Max_Mara_logo.svg",
  },
  {
    title: "Max&Co",
    image: "/logos/MaxCo-logo.svg",
  },
  {
    title: "Mont Blanc",
    image: "/logos/Montblanc_logo.svg",
  },
  {
    title: "Porsche Design",
    image: "/logos/Porsche_Design-Logo.wine.svg",
  },
  {
    title: "Emilio Pucci",
    image: "/logos/Pucci_logo.svg",
  },
  {
    title: "Silhouette",
    image: "/logos/Silhouette-logo.png",
  },
  {
    title: "Swarovski",
    image: "/logos/Swarovski_Logo.svg",
  },
  {
    title: "Titan Flex",
    image: "/logos/titanflex-logo.svg",
  },
  {
    title: "Tom Ford",
    image: "/logos/Tom_Ford_Logo.svg",
  },
  {
    title: "Yudashkin",
    image: "/logos/yudashkin_logo.png",
  },
];

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-[100px]">
      {/* О нас */}
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-10" id="about">
        <Image src="/hero.jpeg" width={1080} height={1080} alt="hero_img" className="rounded-lg animate-slide-left w-full lg:w-1/2" />
        <div className="animate-slide-rigth w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl text-blue-500 mb-4">О нас</h1>
          <p className="text-sm sm:text-base">
            Оптика на Комсомольском, 37 за небольшую свою историю (открылась 25.09.2017 г.) зарекомендовала себя как оптика европейского уровня. Мы предлагаем своим покупателям
            широкий выбор модных оправ и солнцезащитных очков ведущих мировых производителей различного ценового уровня, профессиональный подбор очковой и контактной коррекции,
            изготовление очков любой сложности. Постоянно действуют акционные предложения; скидки постоянным покупателям и держателям социальных карт. Здесь вы найдёте всё, что
            нужно для качественного зрения!
          </p>
        </div>
      </div>

      {/* Услуги */}
      <div className="mt-16" id="services">
        <h1 className="text-center font-semibold text-2xl text-blue-500 animate-slide-down">Услуги</h1>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {services.map(({ icon: Icon, title }, index) => (
            <Card className="flex items-center justify-center w-full sm:w-[300px] h-[200px] hover:-translate-y-2 transition-all cursor-pointer animate-slide-down" key={index}>
              <CardContent className="flex flex-col items-center justify-center gap-5">
                <Icon size={40} className="text-blue-500" />
                <p className="text-center">{title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Больше о нас */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 mt-16" id="more_about">
        <div className="animate-slide-left w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl text-blue-500 mb-4">Больше о нас</h1>
          <p className="text-sm sm:text-base">
            В Оптике на Комсомольском, 37 представлен прекрасный выбор оправ и солнцезащитных очков для мужчин, женщин, детей и подростков ведущих производителей. Качество Вашего
            зрения определяют именно очковые линзы. Сегодня специалисты оптики предлагают очковые линзы, обеспечивающие комфорт и превосходное зрение на разных расстояниях, которые
            лет 20 назад трудно было даже представить. Вам предложат подходящие для Вас линзы с различными характеристиками: фотохромные (хамелеоны), с антибликовым покрытием, с
            защитой от вредных воздействий гаджетов, для водителей, прогрессивные и т. д. Кроме оптических характеристик линз, стоит обратить внимание и на производителя. В Оптике
            на Комсомольском, 37 Вы сможете выбрать очковые линзы ведущих производителей: Carl Zeiss (Германия); Rodenstock (Германия); Seiko (Япония), Тоkai (Япония); Essilor
            (Франция); Optimize (Израиль); Shamir (Израиль) и др.
          </p>
        </div>
        <Image src="/more_about.jpeg" width={1080} height={1080} alt="more_about_img" className="rounded-lg animate-slide-rigth w-full lg:w-1/2" />
      </div>

      {/* Бренды */}
      <AnimateOnView delay={500} animationClass="animate-slide-down">
        <div className="mt-16" id="brends">
          <h1 className="font-semibold text-2xl text-blue-500 text-center mb-10">Бренды, с которыми мы работаем</h1>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {brends.map((brend, index) => (
              <Card key={index} className="flex-shrink-0 w-[160px] h-[160px] flex flex-col items-center justify-center px-2">
                <Image width={1080} height={1080} className="max-h-[80px] w-auto" src={brend.image} alt={brend.title} />
                <div className="mt-2 text-center text-xs">{brend.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </AnimateOnView>

      {/* Наш врач */}
      <AnimateOnView delay={500} animationClass="animate-slide-left">
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-16" id="team">
          <Image src="/doctor.jpeg" width={1080} height={1080} alt="doctor_img" className="rounded-lg animate-slide-left w-full lg:w-1/2" />
          <div className="animate-slide-rigth w-full lg:w-1/2">
            <h1 className="font-semibold text-2xl text-blue-500 mb-4">Наш врач</h1>
            <p className="text-sm sm:text-base">
              Кабинет врача-офтальмолога имеет медицинскую лицензию, оснащён современным диагностическим медоборудованием.
              <br />К вашим услугам:
              <br />- Квалифицированные врачи-офтальмологи;
              <br />- Подбор очковой коррекции любой степени сложности;
              <br />- Подбор контактной коррекции, обучение манипуляциям с КЛ.
              <br />
              Вы можете предварительно записаться к врачу в удобное время по телефонам:
              <br />
              <a href="tel:84956282766" className="font-semibold text-blue-500">
                8(495)628-27-66
              </a>
              <br />
              <a href="tel:84956091338" className="font-semibold text-blue-500">
                8(495)609-13-38
              </a>
            </p>
          </div>
        </div>
      </AnimateOnView>

      {/* Наш мастер */}
      <AnimateOnView delay={1200} animationClass="animate-slide-right">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-6 mt-16">
          <div className="animate-slide-left w-full lg:w-1/2">
            <h1 className="font-semibold text-2xl text-blue-500 mb-4">Наш мастер</h1>
            <p className="text-sm sm:text-base">
              В мастерской работает мастер-сборщик очков с большим опытом работы. У нас доступны все новейшие технологии изготовления очков. Здесь Вам окажут качественный сервис.
              Возможно срочное изготовление очков за 30-45 минут. Мы предлагаем Вам бесплатный сервисный ремонт очков по гарантии.
            </p>
          </div>
          <Image src="/master.jpeg" width={1080} height={1080} alt="master_img" className="rounded-lg animate-slide-rigth w-full lg:w-1/2" />
        </div>
      </AnimateOnView>

      {/* Наша команда */}
      <AnimateOnView delay={1800} animationClass="animate-slide-left">
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-16">
          <Image src="/team.jpeg" width={1080} height={1080} alt="team_img" className="rounded-lg animate-slide-left w-full lg:w-1/2" />
          <div className="animate-slide-right w-full lg:w-1/2">
            <h1 className="font-semibold text-2xl text-blue-500 mb-4">Наша команда</h1>
            <p className="text-sm sm:text-base">
              У нас работают грамотные специалисты своего дела. Мы рады, что покупатели, пришедшие в оптику впервые, возвращаются снова, рекомендуя нас своим близким и знакомым.{" "}
            </p>
          </div>
        </div>
      </AnimateOnView>
    </div>
  );
}
