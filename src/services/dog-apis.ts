const API_BASE_URL = 'https://dog.ceo/api';

// 品種格式類型
type BreedFormat = {
    main: string; // 主品種
    sub?: string; // 子品種（可選）
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

// List all breeds資料格式轉換函數
const transformBreeds = (obj: Record<string, string[]>) => {
    const result = [];

    for (const [key, value] of Object.entries(obj)) {
        // 將鍵的首字母大寫
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

        if (Array.isArray(value) && value.length > 0) {
            // 如果有子數組，將每個值與鍵組合
            value.forEach((subBreed) => {
                const capitalizedSub = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
                result.push(`${capitalizedSub} ${capitalizedKey}`);
            });
        } else {
            // 沒有子數組直接添加
            result.push(capitalizedKey);
        }
    }

    return result;
};

// 獲取指定品種的隨機圖片
const getRandomImage = async (breed: string) => {
    try {
        const parsedBreed = parseBreedName(breed);
        const breedPath = buildBreedPath(parsedBreed);

        const response = await fetch(`${API_BASE_URL}/breed/${breedPath}/images/random`, {
            cache: 'force-cache',
        });

        if (!response.ok) {
            console.error(`獲取品種 ${breed} 的圖片失敗: ${response.status}`);
            return '';
        }

        const data = await response.json();

        if (data.status === 'success') {
            return data.message;
        }

        return '';
    } catch (error) {
        console.error(`獲取品種 ${breed} 的圖片時發生錯誤:`, error);
        return '';
    }
};

// 獲取所有狗狗品種
export const getAllBreeds = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/breeds/list/all`, {
            cache: 'force-cache',
        });

        if (!response.ok) {
            console.error(`獲取所有品種失敗: ${response.status}`);
            return [];
        }

        const data = await response.json();

        if (data.status !== 'success') {
            console.error('API 返回非成功狀態');
            return [];
        }

        const breeds = transformBreeds(data.message);

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
export const getRandomBreedImages = async (breed: string, count: number = 3): Promise<string[]> => {
    try {
        const parsedBreed = parseBreedName(breed);
        const breedPath = buildBreedPath(parsedBreed);

        console.log(`API 請求路徑: ${breedPath}, 原始品種名: ${breed}`);

        const response = await fetch(`${API_BASE_URL}/breed/${breedPath}/images/random/${count}`, {
            cache: 'no-store', // 每次都獲取新的隨機圖片
        });

        if (!response.ok) {
            console.error(`獲取品種 ${breed} 的圖片失敗: ${response.status}`);
            return [];
        }

        const data = await response.json();

        if (data.status === 'success' && Array.isArray(data.message)) {
            return data.message;
        } else if (data.status === 'success' && typeof data.message === 'string') {
            // 處理單張圖片的情況
            return [data.message];
        }

        return [];
    } catch (error) {
        console.error(`獲取品種 ${breed} 的圖片時發生錯誤:`, error);
        return [];
    }
};
