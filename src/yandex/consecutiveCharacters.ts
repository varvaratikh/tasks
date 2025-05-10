//The power of the string is the maximum length of a non-empty
// substring that contains only one unique character.
//
// Given a string s, return the power of s.
// Example 1:
//
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:
//
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

const maxPower = (s: string): number => {
    let max = 1;
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(max, count);
    }

    return max;
};
