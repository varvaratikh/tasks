//Given two integer arrays nums1 and nums2, return an array of
// their intersection. Each element in the result must appear as
// many times as it shows in both arrays and you may return the result in any order.
//
//
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1: number[], nums2: number[]): number[] => {
    const countMap = new Map<number, number>();
    const result: number[] = [];

    for (const num of nums1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (const num of nums2) {
        const count = countMap.get(num);
        if (count && count > 0) {
            result.push(num);
            countMap.set(num, count - 1);
        }
    }

    return result;
};