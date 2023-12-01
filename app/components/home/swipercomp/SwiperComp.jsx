"use client";
import "./swipercomp.css";
import Article from "../article/Article";
// had to separate swiper logic from articles component, since i am fetching data in articles component and here i need to use client side, cannot risk to show api key
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SwiperComp({ results }) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      initialSlide={2}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 5,
        },
      }}
      modules={[Pagination]}
    >
      {results.map((result, index) => (
        <SwiperSlide key={result.url}>
          <Article result={result} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
