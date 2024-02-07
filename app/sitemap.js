import { articlesList } from "./_utils/data"

export default async function sitemap() {
    const scienceUrl = articlesList[0].categoryArticles.map((article, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${article.category}/${index}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const technologyUrl = articlesList[1].categoryArticles.map((article, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${article.category}/${index}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const sportUrl = articlesList[2].categoryArticles.map((article, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${article.category}/${index}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })

    return [
        {
            url: 'https://daily-insight-eight.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://daily-insight-eight.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...scienceUrl, ...technologyUrl, ...sportUrl
    ]
}