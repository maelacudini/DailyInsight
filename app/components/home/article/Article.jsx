import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

export default function Article({ result, index }) {
  return (
    <article className={style.article}>
      <Link
        href={{
          pathname: `/${index + 1}`,
          query: {
            name: result.title,
          },
        }}
      >
        <Image
          src={result.multimedia[0].url}
          alt={result.title}
          loading="lazy"
          height="200"
          width="300"
          placeholder="blur"
          blurDataURL={result.multimedia[0].url}
        />
        <p>{result.title}</p>
      </Link>
    </article>
  );
}
