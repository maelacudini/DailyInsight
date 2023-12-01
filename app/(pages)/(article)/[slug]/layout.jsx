export async function generateMetadata({ params }) {
  const id = params.slug;
  const articleIndex = parseInt(id, 10) - 1;
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.API_KEY}`
  );
  const data = await res.json();
  const result = data.results[articleIndex];

  return {
    title: result.title,
    description: result.abstract,
  };
}

export default function ArticleLayout({ children }) {
  return <div>{children}</div>;
}
