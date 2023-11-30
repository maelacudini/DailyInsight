import Link from "next/link";
import style from "./article.module.scss";

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
        <img src={result.multimedia[0].url} alt={result.title} loading="lazy" />
        <p>{result.title}</p>
      </Link>
    </article>
  );
}
