# 狗狗品種圖庫

這是一個使用 Next.js 建構的網頁應用程式，透過 [Dog CEO API](https://dog.ceo/dog-api/) 展示各種狗狗品種。瀏覽各種狗狗品種、搜尋特定品種。

![狗狗品種圖庫截圖](public/home-screenshot)

## 功能特色

-   **瀏覽狗狗品種**：查看包含縮圖的完整狗狗品種列表
-   **搜尋功能**：快速找到特定狗狗品種
-   **品種詳情**：查看每個品種最多 50 張隨機圖片的圖庫
-   **響應式設計**：針對桌面和移動設備進行優化
-   **快速載入**：實現載入狀態和優化圖片載入
-   **現代化介面**：使用 Tailwind CSS 構建的簡潔界面

## Tech Stack

-   **框架**：[Next.js 15](https://nextjs.org/) 搭配 App Router
-   **語言**：[TypeScript](https://www.typescriptlang.org/)
-   **樣式**：[Tailwind CSS 4](https://tailwindcss.com/)
-   **API**：[Dog CEO API](https://dog.ceo/dog-api/)
-   **部署**：[Vercel](https://vercel.com/)

## 開始使用

### 前置需求

-   Node.js 18.17.0 或更高版本
-   pnpm、npm 或 yarn

### 安裝步驟

1. 複製專案：

    ```bash
    git clone https://github.com/yourusername/dog-breed-gallery.git
    cd dog-breed-gallery
    ```

2. 安裝依賴：

    ```bash
    pnpm install
    # 或
    npm install
    # 或
    yarn install
    ```

3. 啟動伺服器：

    ```bash
    pnpm dev
    # 或
    npm run dev
    # 或
    yarn dev
    ```

4. 在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看應用程式。

## 專案結構

```
dog-breed-gallery/
├── public/             # 靜態資源
├── src/
│   ├── app/            # Next.js App Router 頁面
│   ├── components/     # UI 元件（ 按Atomic Design ）
│   │   ├── atoms/      # 基本構建塊
│   │   ├── molecules/  # 原子的組合
│   │   └── organisms/  # 複雜 UI 區塊
│   ├── lib/            # 工具函數
│   └── services/       # API 服務
│       └── dog-apis.ts # Dog API 整合
└── ...其他
```

## API 整合

應用程式與 Dog CEO API 整合，用於獲取：

-   完整的狗狗品種列表
-   每個品種的隨機圖片
-   品種詳情頁面的多張隨機圖片

API 處理：

-   資料獲取與適當的錯誤處理
-   資料轉換以供前端使用
-   最佳效能的快取策略

## 元件架構

本專案遵循原子設計（ Atomic Design ）：

-   **原子（Atoms）**：基本 UI 元素，如按鈕、容器和回到頂部按鈕
-   **分子（Molecules）**：組合，如品種卡片、搜尋欄和品種標題
-   **有機體（Organisms）**：複雜元件，如品種列表、照片牆和頁面標題
