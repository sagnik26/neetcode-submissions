class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;
        let res = [];
        while(l < r) {
            while(numbers[l] + numbers[r] > target) {
                r--;
            }
            while(numbers[l] + numbers[r] < target) {
                l++;
            }
            if(numbers[l] + numbers[r] === target) {
                res.push(l+1)
                res.push(r+1)
                break
            }
        }
        return res
    }
}
