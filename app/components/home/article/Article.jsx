import Link from "next/link";
import style from "./article.module.scss";
import Image from "next/image";

const images = [
  "/img.webp",
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
];

export default function Article({ article, index, category }) {
  const randomNumber = Math.floor(Math.random() * images.length);

  return (
    <article className={style.article}>
      <Link
        href={{
          pathname: `${category}/${index}`,
          query: {
            name: article.title,
            category: category,
          },
        }}
      >
        <Image
          src={article.urlToImage || images[randomNumber]}
          alt="image"
          width={200}
          height={200}
          sizes="50vw"
          style={{ width: "100%", height: "200px" }}
        />

        <p>{article.title}</p>
      </Link>
    </article>
  );
}
