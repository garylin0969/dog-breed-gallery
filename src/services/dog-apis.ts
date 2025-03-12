const API_BASE_URL = 'https://dog.ceo/api';

// 品種格式類型
type BreedFormat = {
    main: string; // 主品種
    sub?: string; // 子品種（可選）
};

// API 回應類型
type ApiResponse<T> = {
    status: string;
    message: T;
};

// 品種資訊類型
type BreedInfo = {
    breedName: string;
    breedImage: string;
};

/**
 * 解析品種名稱
 * 將顯示格式的品種名稱（如 "Kelpie Australian"）轉換為 API 格式（如 "australian/kelpie"）
 */
const parseBreedName = (breedName: string): BreedFormat => {
    const parts = breedName.toLowerCase().split(' ');

    if (parts.length === 1) {
        // 沒有子品種的情況：如 "Affenpinscher"
        return { main: parts[0] };
    } else {
        // 有子品種的情況：如 "Kelpie Australian" -> { main: "australian", sub: "kelpie" }
        // 子品種在前，主品種在後
        const mainBreed = parts[parts.length - 1];
        const subBreed = parts.slice(0, -1).join('-');
        return { main: mainBreed, sub: subBreed };
    }
};

/**
 * 構建 API 路徑
 * 根據品種格式構建 API 請求路徑
 */
const buildBreedPath = (breed: BreedFormat): string => {
    if (breed.sub) {
        // 有子品種：australian/kelpie
        return `${breed.main}/${breed.sub}`;
    } else {
        // 沒有子品種：affenpinscher
        return breed.main;
    }
};

/**
 * 將 API 回傳的品種資料轉換為前端顯示格式
 */
const transformBreeds = (obj: Record<string, string[]>): string[] => {
    const result = [];

    for (const [key, value] of Object.entries(obj)) {
        // 將key的首字母大寫
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

        if (Array.isArray(value) && value.length > 0) {
            // 如果有子陣列，將每個value與key組合
            value.forEach((subBreed) => {
                const capitalizedSub = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
                result.push(`${capitalizedSub} ${capitalizedKey}`);
            });
        } else {
            // 沒有子陣列直接添加
            result.push(capitalizedKey);
        }
    }

    return result;
};

/**
 * 執行 API 請求並處理錯誤
 */
const fetchApi = async <T>(url: string, cacheOption: RequestCache = 'force-cache'): Promise<T | null> => {
    try {
        const response = await fetch(url, {
            cache: cacheOption,
        });

        if (!response.ok) {
            console.error(`API 請求失敗: ${url}, 狀態碼: ${response.status}`);
            return null;
        }

        const data = (await response.json()) as ApiResponse<T>;

        if (data.status !== 'success') {
            console.error(`API 返回非成功狀態: ${url}`);
            return null;
        }

        return data.message;
    } catch (error) {
        console.error(`API 請求發生錯誤: ${url}`, error);
        return null;
    }
};

/**
 * 獲取指定品種的隨機圖片
 */
const getRandomImage = async (breed: string): Promise<string> => {
    try {
        const parsedBreed = parseBreedName(breed);
        const breedPath = buildBreedPath(parsedBreed);
        const url = `${API_BASE_URL}/breed/${breedPath}/images/random`;

        const imageUrl = await fetchApi<string>(url);
        return imageUrl || '';
    } catch (error) {
        console.error(`獲取品種 ${breed} 的圖片時發生錯誤:`, error);
        return '';
    }
};

/**
 * 獲取所有狗狗品種及其圖片
 */
export const getAllBreeds = async (): Promise<BreedInfo[]> => {
    try {
        const url = `${API_BASE_URL}/breeds/list/all`;
        const breedsData = await fetchApi<Record<string, string[]>>(url);

        if (!breedsData) {
            return [];
        }

        const breeds = transformBreeds(breedsData);

        // 使用 Promise.all 等待所有圖片請求完成
        const breedsWithImages = await Promise.all(
            breeds.map(async (breed) => ({
                breedName: breed,
                breedImage: await getRandomImage(breed),
            }))
        );

        return breedsWithImages;
    } catch (error) {
        console.error('獲取所有品種時發生錯誤:', error);
        return [];
    }
};

/**
 * 依照品種隨機獲取指定張數的照片
 * 使用範例：
 * const images = await getRandomBreedImages('Kelpie Australian', 5);
 * const images = await getRandomBreedImages('Affenpinscher', 3);
 */
export const getRandomBreedImages = async (breed: string, count: number = 50): Promise<string[]> => {
    try {
        const parsedBreed = parseBreedName(breed);
        const breedPath = buildBreedPath(parsedBreed);

        console.log(`API 請求路徑: ${breedPath}, 原始品種名: ${breed}`);

        const url = `${API_BASE_URL}/breed/${breedPath}/images/random/${count}`;
        const images = await fetchApi<string | string[]>(url, 'no-store');

        if (!images) {
            return [];
        }

        // 處理單張或多張圖片的情況
        return Array.isArray(images) ? images : [images];
    } catch (error) {
        console.error(`獲取品種 ${breed} 的圖片時發生錯誤:`, error);
        return [];
    }
};
