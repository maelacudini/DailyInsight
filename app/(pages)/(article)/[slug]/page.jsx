import style from "./article.module.scss";

async function getData(id) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data.results[id];
}

export default async function page({ params }) {
  const id = params.slug;
  const articleIndex = parseInt(id, 10) - 1;
  const data = await getData(articleIndex);

  //get date
  const dateString = data.published_date;
  const dateObject = new Date(dateString);
  const day = dateObject.toLocaleDateString();

  return (
    <div className={style.article}>
      <div className={style.row}>
        <div className={style.col}></div>
        <div className={style.col}>
          <img
            src={data.multimedia[0].url}
            alt={data.title}
            width={"100%"}
            height={"auto"}
            loading="lazy"
          />
          <h2 className={style.title}>{data.title}</h2>
          <p>{data.abstract}</p>

          <div className={style.info}>
            <p>{day}</p>
            <p>{data.byline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
