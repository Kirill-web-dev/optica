import { AnimateOnView } from "@/shared/components/animate-on-view";
import { Card, CardContent, CardDescription } from "@/shared/components/ui/card";

import Image from "next/image";
import { FaGlasses, FaHammer, FaRegEye, FaUserDoctor } from "react-icons/fa6";

const services = [
  {
    title: "Диагностика зрения",
    icon: FaUserDoctor,
  },
  {
    title: "Подбор контактных линз",
    icon: FaRegEye,
  },
  {
    title: "Подбор оправ и солнцезащитных очков",
    icon: FaGlasses,
  },
  {
    title: "Изготовление и ремонт очков",
    icon: FaHammer,
  },
];

const brends = [
  {
    title: "Cartier",
    image: "/logos/Cartier_(jeweler)-Logo.wine.svg",
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
    image: "/logos/logo-guess.jpg",
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
  {
    title: "Jaguar",
    image: "/logos/jaguar_logo.jpg",
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
            «Оптика на Комсомольском, 37» за небольшую свою историю (открылась 25.09.2017 г.) зарекомендовала себя как оптика европейского уровня. Мы предлагаем своим покупателям:
            <br />- широкий выбор модных оправ и солнцезащитных очков ведущих мировых производителей различного ценового уровня; <br />- профессиональный подбор очковой и
            контактной коррекции;
            <br />- аксессуары для очков (футляры, средства по уходу за очками, цепочки для очков, лупы, салфетки, спецотвертки, окклюдeры); <br />- изготовление очков любой
            сложности. Постоянно действуют: <br />- сезонные акционные предложения; <br />- скидки постоянным покупателям и держателям социальных карт. <br />
            Здесь вы найдёте всё, что нужно для качественного зрения!
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
                <Icon size={30} className="text-blue-500" />
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
            В «Оптике на Комсомольском, 37» представлен прекрасный выбор оправ и солнцезащитных очков для мужчин, женщин, детей и подростков ведущих производителей. Качество Вашего
            зрения определяют именно очковые линзы. Вам предложат подходящие для Вас линзы с различными характеристиками, обеспечивающие комфорт и превосходное зрение на разных
            расстояниях ведущих производителей: Carl Zeiss (Германия); Rodenstock (Германия); Seiko (Япония), Тоkai (Япония); Essilor (Франция); Optimize (Израиль); Shamir
            (Израиль):
            <br />- фотохромные линзы (хамелеоны);
            <br />- линзы с антибликовым покрытием;
            <br />- линзы с защитой от вредных воздействий гаджетов;
            <br />- солнцезащитные линзы с диоптриями;
            <br />- линзы для вождения;
            <br />- спортивные солнцезащитные линзы;
            <br />- линзы прогрессивные.
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
                <Image width={1080} height={1080} className="max-h-[80px] w-auto mix-blend-multiply" src={brend.image} alt={brend.title} />
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
            <h1 className="font-semibold text-2xl text-blue-500 mb-4">Офтальмологический кабинет</h1>
            <p className="text-sm sm:text-base">
              Медицинская лицензия, современное диагностическое медоборудование. К вашим услугам:
              <br />- Квалифицированные врачи-офтальмологи;
              <br />- Подбор очковой коррекции любой степени сложности, в том числе прогрессивные линзы;
              <br />- Подбор контактной коррекции;
              <br />- Обучение всем манипуляциям контактными линзами;
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
              Мастер-сборщик очков с большим опытом работы окажет качественный сервис:
              <br />- срочное изготовление очков за 30-45 минут;
              <br />- ремонт очков;
              <br />- ультразвуковая чистка и полировка очков;
              <br />- бесплатный сервисный ремонт очков по гарантии.
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
            <h1 className="font-semibold text-2xl text-blue-500 mb-4">Коллектив</h1>
            <p className="text-sm sm:text-base">
              Команда грамотных специалистов поможет решить любые проблемы, связанные с оптикой. Мы рады, что покупатели, пришедшие в оптику впервые, возвращаются снова, рекомендуя
              нас своим близким и знакомым.
            </p>
          </div>
        </div>
      </AnimateOnView>
    </div>
  );
}
