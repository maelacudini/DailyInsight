"use client";
import "./swipercomp.css";
import "swiper/css";
import "swiper/css/pagination";
import Article from "../article/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function SwiperComp({ articles, category }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2}
      loop={true}
      initialSlide={0}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
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
      {articles.map((article, index) => (
        <SwiperSlide key={index}>
          <Article article={article} index={index} category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
