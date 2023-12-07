/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['static01.nyt.com'],
        domains: [],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}
module.exports = nextConfig;