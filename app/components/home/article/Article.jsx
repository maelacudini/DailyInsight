import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

export default function Article({ result, index, topic }) {
  return (
    <article className={style.article}>
      <Link
        href={{
          pathname: `${topic}/${index + 1}`,
          query: {
            name: result.title,
            topic: topic,
          },
        }}
      >
        <Image
          src={result.multimedia[0].url}
          alt={result.multimedia[0].url}
          loading={index === 1 ? "eager" : "lazy"}
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
