class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alphsNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }

    isPalindrome(s) {
        let str = s.trim();
        let start = 0;
        let end = str.length - 1;

        while(start < end) {
            while(start < end && !this.alphsNum(str[start])) {
                start++;
            }

            while(start < end && !this.alphsNum(str[end])) {
                end--;
            }

            if(s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
