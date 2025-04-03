//Задачи на массивы
// 1️⃣ Напиши функцию, которая находит второй по величине элемент в массиве.
// 2️⃣ Реализуй функцию, которая проверяет, содержит ли массив дубликаты.


const func = (arr: number[]): number => {
    arr.sort((a: number, b: number) => b - a);

    return arr[1];
}

const arr: number[] = [2, 4, 1, 0];
console.log(func(arr));



const func2 = (arr: number[]): boolean => {
    arr.sort((a: number, b: number) => b - a);

    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] === arr[i+1]){
            return true
        }
    }
    return false
}

const arr2: number[] = [2, 4, 1, 0, 2, 1, -1];
console.log(func2(arr2));


//1️⃣ Удалить дубликаты из массива (без Set)
// Напиши функцию, которая удаляет все дубликаты из массива, но не использует Set.


const func3 = (arr: number[]): number[] => {
    arr.sort((a: number, b: number) => b - a);

    const result: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}

const arr3: number[] = [2, 4, 1, 0, 2, 1, -1];
console.log(func3(arr3));


// 2️⃣ **Проверить, является ли массив подмножеством другого массива**
//    *Напиши функцию, которая проверяет, является ли один массив подмножеством другого.*
//    ```typescript
//    isSubset([1, 2, 3], [1, 2]); // true
//    isSubset([1, 2, 3], [1, 4]); // false
//    ```

const isSubsetTypeScript = (arr: number[], arr2: number[]): boolean => {
    const newSet = new Set(arr);
    return arr2.every(element => newSet.has(element))
}

const isSubset = (arr, arr2) => {
    const newSet = new Set(arr);
    return arr2.every(element => newSet.has(element));
}

console.log(isSubset([1, 2, 3], [1, 2]));
console.log(isSubset([1, 2, 3], [1, 4]));


isSubset([1, 2, 3], [1, 2]);
isSubset([1, 2, 3], [1, 4]);

//
// 3️⃣ **Максимальная сумма подмассива (Kadane's Algorithm)**
//    *Найти подмассив с максимальной суммой.*
//    ```typescript
//    maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]); // 6 (подмассив [4,-1,2,1])
//    ```

const maxSubarraySum = (nums: number[]): number => {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

//
// 4️⃣ **Повернуть массив влево на `k` элементов**
//    *Реализуй функцию, которая сдвигает массив влево на `k` элементов.*
//    ```typescript
//    rotateLeft([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
//    ```
//

const rotateLeft = <T>(arr: T[], k: number): T[] => {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;
    return [...arr.slice(k), ...arr.slice(0, k)];
}

// 5️⃣ **Найти два числа в массиве, сумма которых равна `target` (Two Sum)**
//    *Реализуй функцию, которая находит два числа в массиве, дающих в сумме `target`.*
//    ```typescript
//    twoSum([2, 7, 11, 15], 9); // [2, 7]
//    ```

const twoSum = (arr: number[], k: number): number[] | null => {
    const map = new Map<number, number>();

    for (let num of arr) {
        const complement = k - num;
        if (map.has(complement)) {
            return [complement, num];
        }
        map.set(num, true);
    }

    return null;
};
// ---
//
// ### **📌 Задачи на строки**
// 6️⃣ **Проверить, является ли строка палиндромом**
//    *Реализуй функцию, которая проверяет, читается ли строка одинаково слева направо и справа налево.*
//    ```typescript
//    isPalindrome("racecar"); // true
//    isPalindrome("hello"); // false
//    ```

const isPalindrome = (str: string): boolean => {
    return str.toString().split("").reverse().join("") == str.toString();
};

console.log('isPalindrome?',isPalindrome("racecar"))
//
// 7️⃣ **Анаграммы**
//    *Даны две строки. Проверь, являются ли они анаграммами (состоят из одинаковых букв в разном порядке).*
//    ```typescript
//    isAnagram("listen", "silent"); // true
//    isAnagram("hello", "world"); // false
//    ```
//

const isAnagram = (str1: string, str2: string) : boolean => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent"));

// 8️⃣ **Самое длинное слово в строке**
//    *Реализуй функцию, которая возвращает самое длинное слово в строке.*
//    ```typescript
//    longestWord("The quick brown fox jumped over the lazy dog"); // "jumped"
//    ```
//

const longestWord = (sentence: string): string => {
    const words = sentence.split(' ');

    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}


// 9️⃣ **Сжатие строки (Run-Length Encoding)**
//    *Сожми строку, заменяя повторяющиеся символы на `{символ}{количество повторений}`.*
//    ```typescript
//    compressString("aaabbcddd"); // "a3b2c1d3"
//    ```

const compressString = (str: string): string => {
    let newStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        while (i < str.length - 1 && str[i] === str[i+1]) {
            count++;
            i++;
        }
        newStr += str[i] + count;
        count = 1;
    }
    return newStr;
}

console.log(compressString("aaabbcddd"));

//
// 🔟 **Подсчет гласных в строке**
//    *Реализуй функцию, которая считает количество гласных (`a, e, i, o, u`) в строке.*
//    ```typescript
//    countVowels("hello world"); // 3
//    ```

const countVowels = (str: string) : number => {
    const vowels = "aeiou";

    return Array.from(str.toLowerCase()).filter(char => vowels.includes(char)).length;
}


//### 💡 **Задачи на тему "Двухуказатель (Two Pointers)"**
//
// 1. 🔍 **Удаление дубликатов из отсортированного массива:**
//    - Дан отсортированный массив чисел. Удалите все дубликаты "на месте"
//    и верните длину уникального массива.
//    - Пример:
//      ```
//      Вход: [1, 1, 2, 2, 3, 4, 4]
//      Выход: [1, 2, 3, 4], длина = 4
//      ```

const deleteDuplicate = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    let j = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }

    arr.length = j + 1;
    return arr.length;
};

// 2. 🎯 **Пара с заданной суммой:**
//    - Дан отсортированный массив чисел и целевое значение суммы. Найдите два числа,
//    которые в сумме дают целевое значение.
//    - Пример:
//      ```
//      Вход: [1, 2, 3, 4, 6], сумма = 6
//      Выход: [1, 3] (2 + 4 = 6)
//      ```

const returnPairWithAGivenSum = (arr: number[], targetSum: number): number[] | null => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === targetSum) {
            return [arr[left], arr[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}


//
// ---
//
// 3. 🌀 **Сортировка массива нулей и единиц:**
//    - Дана бинарная последовательность (0 и 1). Используя два указателя, отсортируйте массив.
//    - Пример:
//      ```
//      Вход: [0, 1, 0, 1, 1, 0]
//      Выход: [0, 0, 0, 1, 1, 1]
//      ```

const zeroOneSort = (arr: number[]): number[] => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] === 0) {
            left++;
        }
        else if (arr[right] === 1) {
            right--;
        }
        else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr;
}

//
// ---
//
// 4. 💡 **Тройка чисел с нулевой суммой:**
//    - Найдите все уникальные тройки чисел в массиве, сумма которых равна нулю.
//    - Пример:
//      ```
//      Вход: [-1, 0, 1, 2, -1, -4]
//      Выход: [[-1, -1, 2], [-1, 0, 1]]
//      ```


const returnTrioWithANullSum = (nums: number[]): number[][] => {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}


//
// ---
//
// ---
//
// ### 🚀 **Задачи на тему "Скользящее окно (Sliding Window)"**
//
// 1. 🪟 **Максимальная сумма подмассива фиксированной длины:**
//    - Найдите максимальную сумму подмассива длины `k`.
//    - Пример:
//      ```
//      Вход: [2, 1, 5, 2, 8, 1, 5], k = 3
//      Выход: 15 (подмассив [5, 2, 8])
//      ```

const maxSumSubarray = (arr: number[], k: number): number => {
    if (arr.length < k) {
        throw new Error("Размер массива меньше размера окна.");
    }

    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let currentSum = maxSum;

    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}


//
// ---
//
// 2. 🔥 **Длина наибольшего подмассива с суммой не больше K:**
//    - Найдите длину самого длинного подмассива, сумма элементов которого не превышает `K`.
//    - Пример:
//      ```
//      Вход: [1, 2, 1, 0, 1, 1, 0], K = 4
//      Выход: 5 (подмассив [1, 2, 1, 0, 1])
//      ```
//

const maxLengthSubarray = (arr : number[], K:number) : number => {
    let maxLength = 0;
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum > K) {
            currentSum -= arr[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// ---
//
// 3. 🌟 **Наибольшее количество уникальных символов в подстроке фиксированной длины:**
//    - Найдите максимальное количество уникальных символов в любой подстроке длины `k`.
//    - Пример:
//      ```
//      Вход: "abcabcbb", k = 3
//      Выход: 3 ("abc")
//      ```
//
// ---
//
// 4. 🔑 **Минимальная длина подмассива с суммой не меньше S:**
//    - Найдите минимальную длину подмассива, сумма которого не меньше `S`.
//    - Пример:
//      ```
//      Вход: [2, 1, 5, 2, 8], S = 7
//      Выход: 1 (подмассив [8])
//      ```
