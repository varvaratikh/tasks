//Implement a first in first out (FIFO) queue using only two stacks. The implemented
// queue should support all the functions of a normal queue (push, peek, pop, and empty).
//
// Implement the MyQueue class:
//
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
//
// You must use only standard operations of a stack, which means only push to top,
// peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate
// a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
//
//
// Example 1:
//
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
//
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

class MyQueue {
    private inStack: number[] = [];
    private outStack: number[] = [];

    constructor() {

    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        this.shiftStacks();
        return this.outStack.pop()!;
    }

    peek(): number {
        this.shiftStacks();
        return this.outStack[this.outStack.length - 1];
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    private shiftStacks(): void {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()!);
            }
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */