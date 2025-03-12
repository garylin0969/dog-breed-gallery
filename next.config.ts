import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
                port: '',
                pathname: '/**',
            },
        ],
        deviceSizes: [768],
        formats: ['image/webp'],
        minimumCacheTTL: 86400, // 圖片緩存24小時
    },
};

export default nextConfig;
