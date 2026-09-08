class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const set = new Set(nums);
        let max = 1;

        for(const num of nums) {
            let currLen = 1;
            let curr = 1;

            if(!set.has(num-1)) {
                curr = num;

                while(set.has(curr + 1)) {
                    currLen++
                    curr++;
                }
            }

            max = Math.max(max, currLen);
        }

        return max;
    }
}
