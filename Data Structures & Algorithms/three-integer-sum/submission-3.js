class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        const result = [];

        for(let i=0; i<nums.length; i++) {
            // array is sorted, if first element is > 0, so sum of 3 cannot be 0 (Optimization)
            if(nums[i] > 0) break;

            // skip duplicates
            if(i>0 && nums[i] === nums[i-1]) continue;

            let start = i+1;
            let end = nums.length - 1;
            const target = -nums[i];

            while(start < end) {
                if(nums[start] + nums[end] === target) {
                    result.push([nums[i], nums[start], nums[end]])

                    start++;
                    end--;

                    // skip duplicates from start otherwise result array will have duplicate arrays 
                    while(start < end && nums[start] === nums[start-1]) {
                        start++;
                    }

                    // skip duplicates from end otherwise result array will have duplicate arrays 
                    while(start < end && nums[end] === nums[end+1]) {
                        end--;
                    }
                }
                else if(nums[start] + nums[end] > target) {
                    end--;
                }
                else {
                    start++;
                }
            }
        }

        return result;
    }
}
