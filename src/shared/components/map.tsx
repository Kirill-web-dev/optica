// components/YandexMap.tsx
"use client";
import dynamic from "next/dynamic";

export const Map = dynamic(
  () =>
    import("@pbe/react-yandex-maps").then(({ YMaps, Map, Placemark }) => {
      return function InnerMap() {
        return (
          <YMaps>
            <Map defaultState={{ center: [55.72249, 37.57654], zoom: 12 }} width="100%" height="300px">
              <Placemark geometry={[55.72249, 37.57654]} />
              <Placemark geometry={[55.682031, 37.566539]} />
            </Map>
          </YMaps>
        );
      };
    }),
  { ssr: false },
);
