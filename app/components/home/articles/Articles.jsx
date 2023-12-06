import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

async function getData(topic) {
  //revalidate every day
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${process.env.API_KEY}`,
    { next: "no-store" }
  );
  return res.json();
}

export default async function Articles({ topic }) {
  const data = await getData(topic);

  return (
    <section className={style.articles}>
      <h3 className={style.title}>Top {topic} stories of the day</h3>

      <SwiperComp results={data.results} topic={topic} />
    </section>
  );
}
