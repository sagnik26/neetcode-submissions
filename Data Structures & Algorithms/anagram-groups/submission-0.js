class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let x of strs) {
            const arr = new Array(26).fill(0);
            for(let c of x) {
                arr[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = arr.join(",");
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(x);
        }
        return Object.values(res);
    }
}
