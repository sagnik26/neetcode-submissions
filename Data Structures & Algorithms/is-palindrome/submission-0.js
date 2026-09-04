class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphaNeumeric(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphaNeumeric(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++; r--;
        }
        return true;
    }

    /**
     * @param {char} c
     * @return {boolean}
     */
    isAlphaNeumeric(char) {
        return (char >= "a" && char <= "z") ||
               (char >= "A" && char <= "Z") ||
               (char >= "0" && char <= "9")
    }
}
