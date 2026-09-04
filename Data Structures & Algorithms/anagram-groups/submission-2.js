class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map()

        for(const str of strs) {
            const count = new Array(26).fill(0)
            for(const char of str) {
                count[char.charCodeAt(0) - 97]++
            }
            
            const key = count.join(',')
            if(!groups.has(key)) {
                groups.set(key, [])
            }
            groups.get(key).push(str)
        }

        return Array.from(groups.values())
    }
}
