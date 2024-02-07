import { articlesList } from "@/app/_utils/data";

export async function generateMetadata({ params }) {
  const category = params.slug[0];
  const id = params.slug[1];

  const categoryObject = articlesList.find(
    (item) => item.category === category
  );
  const articles = categoryObject ? categoryObject.categoryArticles : [];
  const article = articles[id];

  return {
    title: article.title,
    description: article.description.slice(0, 100) + "...",
    authors: [{ name: article.author }],
    publishedTime: article.date,
    alternates: {
      canonical: `/${category}/${id}`,
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      title: article.title,
      description: article.description.slice(0, 100) + "...",
      images: [article.image],
      url: `https://daily-insight-eight.vercel.app/${category}/${id}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description.slice(0, 100) + "...",
      images: [article.image],
    },
  };
}

export default function ArticleLayout({ children }) {
  return <div>{children}</div>;
}
