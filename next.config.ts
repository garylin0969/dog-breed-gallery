import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['images.dog.ceo'],
        deviceSizes: [768],
        formats: ['image/webp'],
    },
};

export default nextConfig;
