import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

async function getData(api) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${api}.json?api-key=${process.env.API_KEY}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
}

export default async function Articles({ api }) {
  const data = await getData(api);
  return (
    <section className={style.articles}>
      <p className={style.title}>Top {api} stories of the day</p>

      <SwiperComp data={data} api={api} />
    </section>
  );
}
