import type { NextConfig } from 'next';

/**
 * Next.js 配置文件
 * 這裡的配置主要用於優化圖片處理、提高 LCP (Largest Contentful Paint) 性能
 * 以及其他性能優化設置
 */
const nextConfig: NextConfig = {
    /* 主要配置選項 */

    /**
     * 圖片優化配置
     * Next.js 內建的圖片優化功能可以自動調整圖片大小、格式和質量
     */
    images: {
        /**
         * 遠端圖片模式配置
         * 定義哪些外部域名的圖片可以被 Next.js 的圖片優化功能處理
         * 這是一個安全機制，防止任意外部圖片被處理
         */
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.dog.ceo', // 狗狗 API 的圖片域名
                port: '',
                pathname: '/**', // 允許任何路徑
            },
            {
                protocol: 'https',
                hostname: 'placehold.co', // 預設圖片的域名
                port: '',
                pathname: '/**',
            },
        ],

        /**
         * 裝置尺寸斷點
         * 定義不同裝置寬度的斷點，用於生成適合不同螢幕尺寸的圖片
         * 這些尺寸會用於 srcset 屬性，讓瀏覽器選擇最適合當前裝置的圖片
         * 優化目的：減少不必要的大圖下載，提高載入速度
         */
        deviceSizes: [640, 1200],

        /**
         * 圖片尺寸選項
         * 用於 next/image 的 sizes 屬性，當圖片小於螢幕寬度時使用
         * 這些尺寸會與 deviceSizes 合併，形成完整的尺寸列表
         * 優化目的：提供更精確的圖片尺寸選擇，減少帶寬浪費
         */
        imageSizes: [],

        /**
         * 支援的圖片格式
         * 定義 Next.js 圖片優化 API 支援的圖片格式
         * 按優先順序排列，如果瀏覽器支援多種格式，會使用第一個匹配的格式
         * 優化目的：使用更高效的圖片格式，減少檔案大小
         */
        formats: ['image/avif', 'image/webp'], // AVIF 比 WebP 更高效，但編碼時間更長

        /**
         * 圖片緩存時間（秒）
         * 定義圖片在 Next.js 圖片優化緩存中的最短保留時間
         * 優化目的：減少重複處理相同圖片的次數，提高效能
         */
        minimumCacheTTL: 86400, // 24小時

        /**
         * 圖片質量選項
         * 限制允許的圖片質量值，平衡圖片質量和檔案大小
         * 優化目的：控制圖片壓縮程度，減少檔案大小
         */
        qualities: [60, 75, 85], // 60: 低質量但小檔案，75: 平衡點，85: 高質量

        /**
         * 允許處理 SVG 圖片
         * 由於 SVG 可能包含 JavaScript，預設情況下不處理
         * 優化目的：允許優化 SVG 圖片，但需注意安全風險
         */
        dangerouslyAllowSVG: true,

        /**
         * 內容處置類型
         * 定義圖片的 Content-Disposition HTTP 標頭
         * 優化目的：控制瀏覽器如何處理圖片（顯示或下載）
         */
        contentDispositionType: 'attachment',

        /**
         * 禁用靜態圖片優化
         * 如果設為 true，則不會優化 import 的靜態圖片
         * 優化目的：在某些情況下可能需要禁用優化，但通常保持 false
         */
        disableStaticImages: false,
    },

    /**
     * 啟用 HTTP 壓縮
     * 使用 gzip 或 brotli 壓縮 HTTP 響應
     * 優化目的：減少傳輸大小，提高載入速度
     */
    compress: true,

    /**
     * 禁用 "Powered by Next.js" HTTP 標頭
     * 移除 X-Powered-By 標頭
     * 優化目的：減少 HTTP 標頭大小，增加安全性
     */
    poweredByHeader: false,

    /**
     * 啟用 React 嚴格模式
     * 在開發環境中啟用額外的檢查和警告
     * 優化目的：提前發現潛在問題，提高代碼質量
     */
    reactStrictMode: true,

    /**
     * 靜態頁面生成超時時間（秒）
     * 定義靜態頁面生成的最長等待時間
     * 優化目的：防止生成過程卡住，確保構建過程順利完成
     */
    staticPageGenerationTimeout: 60,
};

export default nextConfig;
