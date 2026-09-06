class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const numSet = new Set(nums);
        let maxLength = 1;

        for(const num of nums) {
            if(!numSet.has(num-1)) {
                let currlength = 1;
                let curr = num;

                while(numSet.has(curr + 1)) {
                    currlength++;
                    curr++;
                }

                maxLength = Math.max(maxLength, currlength)
            }
        }

        return maxLength;
    }
}
