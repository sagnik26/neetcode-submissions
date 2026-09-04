class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { 
        const newSet = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            let len = 1;
            if(!newSet.has(num-1)) {
                while(newSet.has(num + len)) {
                    len++;
                }

                longest = Math.max(longest, len)
            }
        }

        return longest;
    }
}
