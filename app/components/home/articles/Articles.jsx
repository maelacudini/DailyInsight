import "react-loading-skeleton/dist/skeleton.css";
import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

async function getData(topic) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.API_KEY}`
  );
  return res.json();
}

export default async function Articles({ topic }) {
  const data = await getData(topic);

  return (
    <section className={style.articles}>
      <h2 className={style.title}>
        Top <span className="times">{topic}</span> stories of the day
      </h2>

      <SwiperComp results={data.results} topic={topic} />
    </section>
  );
}