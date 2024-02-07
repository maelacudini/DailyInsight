import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

export default function Article({ article, index, category }) {
  return (
    <article className={style.article}>
      <Link href={`/${category}/${index}`}>
        <div className={style.imagecont}>
          <Image
            src={article.image}
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        <p>{article.title.slice(0, 60)}...</p>
      </Link>
    </article>
  );
}
