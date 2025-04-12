//🔹 Базовый уровень
// 1) Проверка на дубликаты
// Условие: Вернуть true, если в массиве есть хотя бы один повторяющийся элемент.
// Тип: Set, проверка уникальности
// Пример: [1,2,3,1] → true


const checkForDuplicates = (arr: number[]) : boolean => {
    const unique = new Set(arr);

    return unique.size !== arr.length;
}

// 2) Проверка анаграмм
// Условие: Являются ли две строки анаграммами друг друга?
// Тип: HashMap или Array[26] для частот символов
// Пример: "listen", "silent" → true


const isAnagram = (str1: string, str2: string): boolean => {
    if (str1.length !== str2.length) return false;

    const charCount = new Map<string, number>();

    for (const char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str2) {
        if (!charCount.has(char)) return false;
        charCount.set(char, charCount.get(char)! - 1);
        if (charCount.get(char)! < 0) return false;
    }

    return true;
}




// 3)Частота символов
// Условие: Верни мапу с количеством вхождений каждого символа в строку.
// Пример: "aabbc" → {a: 2, b: 2, c: 1}

const frequency = (str: string): Map<string, number> => {

    const charCount = new Map<string, number>();

    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    return charCount;
}

// 🔹 Средний уровень
// Пересечение двух массивов
// Условие: Верни массив из общих элементов (уникальных) двух входных массивов.
// Тип: Set
// Пример: [1,2,2,1], [2,2] → [2]


const intersection = (arr: number[], arr2: number[]): number[] => {
    const common = arr.filter(el => arr2.includes(el));

    return [...new Set(common)];
}

// Два числа дают сумму (Two Sum)
// Условие: Есть ли два числа в массиве, сумма которых равна target?
// Тип: HashMap (ключ — число, значение — индекс)
// Пример: [2,7,11,15], target=9 → true (2 + 7)


function hasTwoSum(nums: number[], target: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
}




// Наиболее частый элемент (Mode)
// Условие: Верни число, которое встречается чаще всего.
// Пример: [1,3,1,3,2,1] → 1

const frequentElement = (arr: number[]): number => {
    const map = new Map<number, number>();

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let mostFrequent = arr[0];

    for (let [key, value] of map.entries()) {
        if (value > maxCount) {
            maxCount = value;
            mostFrequent = key;
        }
    }

    return mostFrequent;
};




// 🔹 Продвинутый уровень
// Подмассив с суммой 0
// Условие: Есть ли непрерывный подмассив с суммой 0?
// Идея: Префиксные суммы + Set
// Пример: [1, 2, -3, 4] → true

const zeroSum = (arr: number[]) : boolean => {

    return false
}





// Самая длинная последовательность
// Условие: Найди длину самой длинной последовательной последовательности в неотсортированном массиве.
// Тип: Set, не сортировать!
// Пример: [100, 4, 200, 1, 3, 2] → 4 (последовательность: 1,2,3,4)
// Подстрока без повторяющихся символов
// Условие: Найди длину самой длинной подстроки без повторов.
// Тип: Set + Sliding Window
// Пример: "abcabcbb" → 3 (abc)