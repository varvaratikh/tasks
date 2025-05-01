//Given a string s, find the first non-repeating character in it
// and return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

const firstUniqChar = (s: string): number => {
    const charMap = new Map<string, number>();

    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (charMap.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
