/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: []
    },
    experimental: {
        serverActions: true,
    },
    redirects: async () => {
        return [
            {
                source: '/github',
                destination: 'https://github.com/JoshuaEpstein/Mindplanr',
                permanent: true,
            },
        ]
    }
}

export default nextConfig;