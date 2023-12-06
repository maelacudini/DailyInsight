import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

export default function Article({ result, index, topic }) {
  return (
    <article className={style.article}>
      <Link
        href={{
          pathname: `${topic}/${index}`,
          query: {
            name: result.title,
            topic: topic,
          },
        }}
      >
        {result.multimedia && result.multimedia[0] ? (
          <Image
            src={result.multimedia[0].url}
            alt={result.multimedia[0].url}
            priority={index === 1 ? "true" : "false"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "200px" }}
          />
        ) : (
          <Image
            src="/ny.webp"
            alt="no image for this article"
            priority={index === 1 ? "true" : "false"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "200px" }}
          />
        )}

        <p>{result.title}</p>
        <p>{index}</p>
      </Link>
    </article>
  );
}
