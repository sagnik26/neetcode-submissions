class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for(let i=0; i<nums.length; i++) {
            seen.set(nums[i], i)
        }

        for(let i=0; i<nums.length; i++) {
            const val = target - nums[i]
            if(seen.has(val) && seen.get(val) != i) {
                return [i, seen.get(val)].sort((a,b) => a-b)
            }
        }

        return []
    }
}
