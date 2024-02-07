import { articlesList } from "@/app/_utils/data";
import SwiperComp from "../swipercomp/SwiperComp";
import style from "./articles.module.scss";

export default async function Articles({ category }) {
  return (
    <section className={style.articles}>
      <h3 className={style.title}>Top {category} stories of the day</h3>

      {articlesList.map((article, index) => {
        return (
          <div key={index}>
            {article.category === category && (
              <SwiperComp
                key={index}
                index={index}
                articles={article.categoryArticles}
                category={category}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
