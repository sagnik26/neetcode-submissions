class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()

        for(let i=0; i<nums.length; i++) {
            count.set(nums[i], (count.get(nums[i]) || 0) + 1)
        }

        const bucket = Array.from({ length: nums.length + 1 }, () => [])
        for(const [num, freq] of count) {
            bucket[freq].push(num)
        }

        const result = []
        for(let freq = bucket.length - 1; freq >= 1 && result.length < k; freq--) {  
            for(const num of bucket[freq]) {
                result.push(num)
                if(result.length === k) break;
            }
        }

        return result
    }
}
