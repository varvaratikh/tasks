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
// 8️⃣ **Самое длинное слово в строке**
//    *Реализуй функцию, которая возвращает самое длинное слово в строке.*
//    ```typescript
//    longestWord("The quick brown fox jumped over the lazy dog"); // "jumped"
//    ```
//
// 9️⃣ **Сжатие строки (Run-Length Encoding)**
//    *Сожми строку, заменяя повторяющиеся символы на `{символ}{количество повторений}`.*
//    ```typescript
//    compressString("aaabbcddd"); // "a3b2c1d3"
//    ```
//
// 🔟 **Подсчет гласных в строке**
//    *Реализуй функцию, которая считает количество гласных (`a, e, i, o, u`) в строке.*
//    ```typescript
//    countVowels("hello world"); // 3
//    ```
//
// ---
//
// Выбирай любую задачу и решай! Если где-то застрянешь — помогу 💪🔥