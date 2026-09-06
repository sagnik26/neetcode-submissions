class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        const sorted = [...nums].sort((a,b) => a-b)
        let currLength = 1;
        let maxLength = 1;

        for(let i=1; i<sorted.length; i++) {
            if(sorted[i-1] === sorted[i]) {
                continue;
            }
            else if(sorted[i-1] + 1 === sorted[i]) {
                currLength += 1;
            }
            else {
                currLength = 1;
            }

            maxLength = Math.max(currLength, maxLength);
        }

        return maxLength;
    }
}
