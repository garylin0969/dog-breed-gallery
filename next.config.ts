import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['images.dog.ceo'],
        deviceSizes: [768],
        formats: ['image/webp'],
        minimumCacheTTL: 86400, // 圖片緩存24小時
    },
    experimental: {
        optimizeCss: true, // 優化CSS
    },
};

export default nextConfig;
