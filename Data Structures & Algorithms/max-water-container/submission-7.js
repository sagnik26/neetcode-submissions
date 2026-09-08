class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;

        let max = 0;

        while(start < end) {
            const area = Math.min(heights[start], heights[end]) * (end-start);

            max = Math.max(max, area);

            if(heights[start] <= heights[end]) {
                start++;
            }
            else {
                end--;
            }
        }

        return max;
    }
}
