import Image from "next/image";
import style from "./article.module.scss";
import Link from "next/link";
import { articleContent } from "@/app/utils/data";

export async function getData(id, topic) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=${process.env.NEWS_API}`,
    { cache: "no-store" }
  );
  const articles = await res.json();
  const article = articles.articles[id];

  return {
    article,
    totalArticles: articles.totalResults,
  };
}

const images = [
  "/img.webp",
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
];

export default async function page({ params }) {
  const randomNumber = Math.floor(Math.random() * images.length);
  const id = params.slug[1];
  const category = params.slug[0];
  const { article, totalArticles } = await getData(id, category);

  return (
    <div className={style.article}>
      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <Image
            src={article.urlToImage || images[randomNumber]}
            alt="image"
            priority
            width={200}
            height={200}
            sizes="100vw"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <h2 className={style.title}>{article.title}</h2>
          <p className={style.content}>
            {article.content !== null && article.content.trim() !== ""
              ? article.content
              : articleContent[0]}
          </p>

          <Link href={article.url}>Read the full article</Link>

          <div className={style.info}>
            <p>{article.publishedAt}</p>
            <p>{article.author}</p>
          </div>

          <div className={style.footer}>
            {id > 0 && (
              <Link
                href={`/${Number(id) - 1}`}
                as={`/article/${category}/${Number(id) - 1}`}
              >
                Previous
              </Link>
            )}
            {id < 19 && (
              <Link
                href={`/${Number(id) + 1}`}
                as={`/article/${category}/${Number(id) + 1}`}
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
