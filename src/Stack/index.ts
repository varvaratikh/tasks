// ### **🔹 Базовый уровень**
//
// **1) Стек (LIFO)**
// Условие: Реализуйте стек с операциями push и pop. Напишите функцию для проверки, является ли стек пустым.
// Пример:
// stack.push(10);
// stack.push(20);
// stack.pop(); // 20
// stack.pop(); // 10

const createStack = <T>() => {
    const items: T[] = [];

    return {
        push: (item: T) => {
            items.push(item);
        },
        pop: (): T | undefined => {
            return items.pop();
        },
        isEmpty: (): boolean => {
            return items.length === 0;
        },
    };
};

const stack = createStack<number>();

stack.push(10);
stack.push(20);


//
// **2) Очередь (FIFO)**
// Условие: Реализуйте очередь с операциями enqueue и dequeue. Напишите
// функцию для проверки, является ли очередь пустой.
// Пример:
// queue.enqueue(10);
// queue.enqueue(20);
// queue.dequeue(); // 10
// queue.dequeue(); // 20


const createQueue = <T>() =>{
    const items: T[] = [];

    return {
        enqueue(item: T) {
            items.push(item);
        },
        dequeue(): T | undefined {
            return items.shift();
        },
        isEmpty(): boolean {
            return items.length === 0;
        }
    };
}
//
// **3) Дек (Двусторонняя очередь)**
// Условие: Реализуйте дек (двустороннюю очередь) с операциями добавления и удаления элементов с обоих концов.
// Пример:
// deque.pushFront(10);
// deque.pushBack(20);
// deque.popFront(); // 10
// deque.popBack(); // 20
//

const deq = <T>() => {
    const items: T[] = [];

    return {
        pushFront(item: T) {
            items.unshift(item);
        },

        pushBack(item: T) {
            items.push(item);
        },

        popFront(): T | undefined {
            return items.shift();
        },
        popBack(): T | undefined {
            return items.pop();
        }
    };
}


// ---
//
// ### **🔹 Средний уровень**
//
// **4) Моностек**
// Условие: Реализуйте моностек, который всегда возвращает минимальное значение за время O(1).
// С помощью дополнительного стека храните минимальные элементы.
// Пример:
// monostack.push(10);
// monostack.push(5);
// monostack.push(8);
// monostack.getMin(); // 5
// monostack.pop(); // 8
// monostack.getMin(); // 5
//

const monoStack = () => {
    const stack: number[] = [];
    const minStack: number[] = [];

    return {
        push(item: number) {
            stack.push(item);
            if (minStack.length === 0 || item <= minStack[minStack.length - 1]) {
                minStack.push(item);
            }
        },

        pop(): number | undefined {
            const popped = stack.pop();
            if (popped === minStack[minStack.length - 1]) {
                minStack.pop();
            }
            return popped;
        },

        getMin(): number {
            if (minStack.length === 0) {
                throw new Error("Stack is empty");
            }
            return minStack[minStack.length - 1];
        },

        peek(): number | undefined {
            return stack[stack.length - 1];
        },

        isEmpty(): boolean {
            return stack.length === 0;
        }
    };
};


// **5) Монотонная очередь**
// Условие: Реализуйте монотонную очередь, которая хранит элементы в порядке неубывания.
// Реализуйте операцию для добавления элемента в очередь, сохраняя порядок.
// Пример:
// monotonicQueue.enqueue(5);
// monotonicQueue.enqueue(3);
// monotonicQueue.enqueue(8);
// monotonicQueue.dequeue(); // 3 (самый маленький)


const monoQueue = () => {
    const queue: number[] = [];

    return {
        enqueue(item: number) {
            while (queue.length > 0 && queue[queue.length - 1] > item) {
                queue.pop();
            }
            queue.push(item);
        },

        dequeue(): number | undefined {
            return queue.shift();
        },

        getMin(): number {
            if (queue.length === 0) {
                throw new Error("Queue is empty");
            }
            return queue[0];
        },

        peek(): number | undefined {
            return queue[0];
        },

        isEmpty(): boolean {
            return queue.length === 0;
        },

        print(): void {
            console.log(queue);
        }
    };
};

//
// ---
//
// ### **🔹 Продвинутый уровень**
//
// **6) Проверка на палиндром с использованием стека**
// Условие: Напишите программу, которая проверяет, является ли строка палиндромом,
// используя стек. Для этого вы должны использовать стек для сохранения символов
// строки и сравнивать их с символами строки в обратном порядке.
// Пример:
// isPalindrome("racecar"); // true
// isPalindrome("hello"); // false
//

const isPalindrome = (str: string): boolean => {
    const stack: string[] = [];
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let char of cleanedStr) {
        stack.push(char);
    }

    for (let char of cleanedStr) {
        const top = stack.pop();
        if (char !== top) {
            return false;
        }
    }

    return true;
}


// **7) Максимальная сумма в очереди**
// Условие: Используя очередь, реализуйте программу, которая находит максимальную сумму
// подмассива размером k в массиве.
// Пример:
// maxSumSubarray([1, 2, 3, 4, 5], 3); // 12 (подмассив [3, 4, 5])

const maxSumSubarray = (arr: number[], k: number): number => {
    if (arr.length < k) return 0;

    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

//
// **8) Минимум в монотонной очереди**
// Условие: Используя монотонную очередь, найдите минимальный элемент в
// подмассиве фиксированной длины, двигаясь по массиву.
// Пример:
// minInSlidingWindow([4, 3, 1, 7, 2, 5], 3); // [1, 1, 1, 2]
//
// ---


const minInSlidingWindow = (nums: number[], k: number): number[] => {
    const result: number[] = [];
    const deque: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        while (deque.length && nums[deque[deque.length - 1]] >= nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}