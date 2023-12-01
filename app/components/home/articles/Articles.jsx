import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

async function getData(api) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${api}.json?api-key=${process.env.API_KEY}`
  );
  return res.json();
}

export default async function Articles({ api }) {
  const data = await getData(api);

  return (
    <section className={style.articles}>
      <h2 className={style.title}>
        Top <span className="times">{api}</span> stories of the day
      </h2>

      <SwiperComp results={data.results} />
    </section>
  );
}
