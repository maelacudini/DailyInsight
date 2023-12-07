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
          src={
            article.urlToImage !== null
              ? article.urlToImage
              : images[randomNumber]
          }
          alt="image"
          priority={index === 1 ? "true" : "false"}
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: "100%", height: "200px" }}
        />

        <p>{article.title}</p>
      </Link>
    </article>
  );
}
