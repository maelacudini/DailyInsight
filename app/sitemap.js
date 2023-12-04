export async function getBusinessPosts() {
    const business = await fetch(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${process.env.API_KEY}`)
    if (!business.ok) {
        throw new Error('Failed to fetch data')
    }
    return business.json()
}

export async function getPoliticsPosts() {
    const politics = await fetch(`https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${process.env.API_KEY}`)
    if (!politics.ok) {
        throw new Error('Failed to fetch data')
    }
    return politics.json()
}


export async function getTechnologyPosts() {
    const technology = await fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.API_KEY}`)
    if (!technology.ok) {
        throw new Error('Failed to fetch data')
    }
    return technology.json()
}


export default async function sitemap() {
    const business = await getBusinessPosts();
    const politics = await getPoliticsPosts();
    const technology = await getTechnologyPosts();
    const businessUrl = business.results.map((post) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const politicsUrl = politics.results.map((post) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.6,
        }
    })
    const technologyUrl = technology.results.map((post) => {
        return {
            url: `https://daily-insight-eight.vercel.app/${post.slug}`,
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
        ...businessUrl, ...politicsUrl, ...technologyUrl
    ]
}