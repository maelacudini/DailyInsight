export async function getBusinessPosts() {
    const business = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API}`)
    if (!business.ok) {
        throw new Error('Failed to fetch data')
    }
    return business.json()
}

export async function getSciencePosts() {
    const science = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.NEWS_API}`)
    if (!science.ok) {
        throw new Error('Failed to fetch data')
    }
    return science.json()
}


export async function getTechnologyPosts() {
    const technology = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API}`)
    if (!technology.ok) {
        throw new Error('Failed to fetch data')
    }
    return technology.json()
}


export default async function sitemap() {
    const business = await getBusinessPosts();
    const science = await getSciencePosts();
    const technology = await getTechnologyPosts();
    const businessUrl = business.results.map((post, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/business/${index}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const scienceUrl = science.results.map((post, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/science/${index}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const technologyUrl = technology.results.map((post, index) => {
        return {
            url: `https://daily-insight-eight.vercel.app/technology/${index}`,
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
        ...businessUrl, ...scienceUrl, ...technologyUrl
    ]
}