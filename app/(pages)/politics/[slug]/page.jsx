import Image from "next/image";
import style from "./politics.module.scss";
import Link from "next/link";

export async function getData(id) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.API_KEY}`,
    { next: "no-store" }
  );
  const articles = await res.json();

  return {
    data: articles.results[id - 1],
    totalArticles: articles.results.length,
  };
}

export default async function page({ params }) {
  const id = params.slug;
  const { data, totalArticles } = await getData(id);

  //get date
  const dateString = data.published_date;
  const dateObject = new Date(dateString);
  const day = dateObject.toLocaleDateString();

  return (
    <div className={style.article}>
      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <Image
            src={data.multimedia[0].url}
            alt={data.title}
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <h2 className={style.title}>{data.title}</h2>
          <p>{data.abstract}</p>

          <div className={style.info}>
            <p>{day}</p>
            <p>{data.byline}</p>
          </div>

          <div className={style.footer}>
            {id >= 2 && (
              <Link
                href={{
                  pathname: `/politics/${Number(id) - 1}`,
                }}
              >
                Previous
              </Link>
            )}
            {id < totalArticles && (
              <Link
                href={{
                  pathname: `/politics/${Number(id) + 1}`,
                }}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
