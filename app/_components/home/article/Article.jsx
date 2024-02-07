import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

export default function Article({ article, index, category }) {
  return (
    <article className={style.article}>
      <Link href={`/${category}/${index}`}>
        <Image
          src={article.image}
          alt="image"
          height={200}
          width={200}
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0 ? true : false}
        />

        <p>{article.title.slice(0, 60)}...</p>
      </Link>
    </article>
  );
}
