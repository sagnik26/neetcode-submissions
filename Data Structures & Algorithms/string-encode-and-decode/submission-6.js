class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for(let str of strs) {
            result += str.length + "#" + str;
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0
        const result = []

        while(i < str.length) {
            let j = i;

            while(str[j] !== '#') {
                j++
            }

            const length = parseInt(str.slice(i,j))
            const start = j+1
            const end = start + length

            const val = str.slice(start, end)

            result.push(val)

            i = end
        }

        return result
    }
}
