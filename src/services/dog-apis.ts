const API_BASE_URL = 'https://dog.ceo/api';

// 轉換函數
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
    const response = await fetch(`${API_BASE_URL}/breed/${breed?.toLowerCase()}/images/random`);
    const data = await response.json();

    if (data.status === 'success') {
        return data.message;
    }

    return '';
};

// 獲取所有狗狗品種
export const getAllBreeds = async () => {
    const response = await fetch(`${API_BASE_URL}/breeds/list/all`);
    const data = await response.json();

    const breeds = transformBreeds(data.message);

    // 使用 Promise.all 等待所有圖片請求完成
    const breedsWithImages = await Promise.all(
        breeds.map(async (breed) => ({
            breedName: breed,
            breedImage: await getRandomImage(breed),
        }))
    );

    return breedsWithImages;
};
