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
        <Image
          src={result.multimedia[0].url}
          alt={result.multimedia[0].url}
          priority={index === 1 ? "true" : "false"}
          width={0}
          height={0}
          sizes="(max-width: 600px) 50vw, (max-width: 1000px) 25vw"
          style={{ width: "100%", height: "200px" }}
        />

        <p>{result.title}</p>
      </Link>
    </article>
  );
}
