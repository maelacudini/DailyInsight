export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://daily-insight-eight.vercel.app/sitemap.xml',
    }
}