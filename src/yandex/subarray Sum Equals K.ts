//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
//
// A subarray is a contiguous non-empty sequence of elements within an array.
//
//
//
// Example 1:
//
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
//
// Input: nums = [1,2,3], k = 3
// Output: 2
//


const subarraySum = (nums: number[], k: number): number => {
    const prefixSumCount = new Map<number, number>();
    prefixSumCount.set(0, 1);

    let count = 0;
    let prefixSum = 0;

    for (const num of nums) {
        prefixSum += num;
        if (prefixSumCount.has(prefixSum - k)) {
            count += prefixSumCount.get(prefixSum - k)!;
        }

        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }

    return count;
};
