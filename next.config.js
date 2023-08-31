/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lottie-boh-assets.s3.eu-west-2.amazonaws.com/**',
            }
        ],
    },
}

module.exports = nextConfig
