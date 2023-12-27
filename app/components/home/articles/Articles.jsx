import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

async function getData(category) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API}`,
    { next: "no-store" }
  );
  return res.json();
}

export default async function Articles({ category }) {
  const data = await getData(category);

  return (
    <section className={style.articles}>
      <h3 className={style.title}>Top {category} stories of the day</h3>

      <SwiperComp articles={data.articles} category={category} />
    </section>
  );
}
