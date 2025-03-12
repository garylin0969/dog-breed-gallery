import type { NextConfig } from 'next';

/**
 * Next.js 配置文件
 * 這裡的配置主要用於優化圖片處理、提高 LCP (Largest Contentful Paint) 性能
 * 以及其他性能優化設置
 * 優化重點：圖片載入速度優先於品質
 */
const nextConfig: NextConfig = {
    /* 主要配置選項 */

    /**
     * 圖片優化配置
     * 針對最快載入速度進行優化，犧牲部分圖片品質
     */
    images: {
        /**
         * 遠端圖片模式配置
         * 定義哪些外部域名的圖片可以被 Next.js 的圖片優化功能處理
         */
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dog.ceo', // 狗狗 API 的圖片域名
                port: '',
                pathname: '/**', // 允許任何路徑
            },
        ],

        /**
         * 裝置尺寸斷點
         * 減少斷點數量，專注於小尺寸圖片以加快載入
         * 只保留一個關鍵尺寸，完全匹配最大照片 //輪播牆
         * 優化目的：減少圖片尺寸，提高載入速度
         */
        deviceSizes: [384],

        /**
         * 圖片尺寸斷點
         * 針對小型圖片（如頭像）優化
         * 只保留一個尺寸，完全匹配最小照片 // 搜尋列表
         * 優化目的：為小圖提供精確尺寸，避免下載過大圖片
         */
        imageSizes: [60],

        /**
         * 支援的圖片格式
         * 優先使用 WebP 格式，因為編碼速度快於 AVIF
         * 優化目的：加快圖片處理速度
         */
        formats: ['image/webp'],

        /**
         * 圖片緩存時間（秒）
         * 增加緩存時間，減少重新處理圖片的頻率
         */
        minimumCacheTTL: 604800, // 7天

        /**
         * 允許處理 SVG 圖片
         */
        dangerouslyAllowSVG: true,

        /**
         * 內容處置類型
         */
        contentDispositionType: 'inline', // 改為 inline 以便直接顯示

        /**
         * 禁用靜態圖片優化
         */
        disableStaticImages: false,
    },

    /**
     * 啟用 HTTP 壓縮
     * 使用 gzip 或 brotli 壓縮 HTTP 響應
     */
    compress: true,

    /**
     * 禁用 "Powered by Next.js" HTTP 標頭
     * 移除 X-Powered-By 標頭
     */
    poweredByHeader: false,

    /**
     * 啟用 React 嚴格模式
     * 在開發環境中啟用額外的檢查和警告
     */
    reactStrictMode: true,
};

export default nextConfig;
