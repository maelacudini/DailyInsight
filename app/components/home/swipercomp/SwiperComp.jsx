"use client";
import "./swipercomp.css";
import Article from "../article/Article";
import { v4 as uuidv4 } from "uuid";
// had to separate swiper logic from articles component, since i am fetching data in articles component and here i need to use client side, cannot risk to show api key
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SwiperComp({ articles, category }) {
  const randomId = uuidv4();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={2}
      loop={true}
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
        <SwiperSlide key={randomId + article.title}>
          <Article article={article} index={index} category={category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
