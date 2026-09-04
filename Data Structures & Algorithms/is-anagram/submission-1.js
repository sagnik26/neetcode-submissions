class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let hS = new Set();
        let hT = new Set();

        for(let i=0; i<s.length; i++) {
            hS[s[i]] = (hS[s[i]] || 0) + 1;
            hT[t[i]] = (hT[t[i]] || 0) + 1;
        }

        for (const key in hS) {
            if(hS[key] !== hT[key]) {
                return false;
            }
        }
        return true;
    }
}
