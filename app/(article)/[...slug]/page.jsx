import Image from "next/image";
import style from "./article.module.scss";
import Link from "next/link";
import { articlesList } from "@/app/_utils/data";

export default async function page({ params }) {
  const category = params.slug[0];
  const id = params.slug[1];

  const categoryObject = articlesList.find(
    (item) => item.category === category
  );
  const articles = categoryObject ? categoryObject.categoryArticles : [];
  const article = articles[id];

  return (
    <main className={style.article}>
      <article className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <Image
            className={style.image}
            src={article.image}
            alt="image"
            priority
            loading="eager"
            height={300}
            width={1000}
          />
          <h2 className={style.title}>{article.title}</h2>
          <p className={style.content}>{article.description}</p>

          <Link href="/">Read the full article</Link>

          <div className={style.info}>
            <p>{article.date}</p>
            <p>{article.author}</p>
          </div>

          <div className={style.footer}>
            {id > 0 && (
              <Link
                href={`/${Number(id) - 1}`}
                as={`/${category}/${Number(id) - 1}`}
              >
                Previous
              </Link>
            )}
            {id < articles.length - 1 && (
              <Link
                href={`/${Number(id) + 1}`}
                as={`/${category}/${Number(id) + 1}`}
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
