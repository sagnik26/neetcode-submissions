class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let mp = new Map();
        let seen = new Set(); 
        let res = []; 
        for(let i=0; i<nums.length; i++) {
            for(let j=i+1; j<nums.length; j++) {
                const newSum = nums[i] + nums[j];
                if(!mp.has(newSum)) {
                    mp.set(newSum, [[i,j]])
                }
                else {
                    mp.get(newSum).push([i,j])
                }
            }
        }

        for(let i=0; i<nums.length; i++) {
            const target = -nums[i];
            if(mp.has(target)) {
                for (let [j, k] of mp.get(target)) {
                    if(i !== j && i!== k) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);
                    let key = triplet.join(",");

                    if(!seen.has(key)) {
                        seen.add(key)
                        res.push(triplet);
                    }
                  }
                }
            }
        }

        return res;
    }
}
