class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      if(strs.length === 0) return "";
      let sizes = [], res = "";
      for(let st of strs) {
        sizes.push(st.length);
      }
      
      for(let sz of sizes) {
        res += sz + ","
      }

      res += "#";
      for(let st of strs) {
        res += st;
      }

      return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        let sizes = [], res = [], i = 0;
        while(str[i] !== "#") {
            let cur = "";
            while(str[i] !== ",") {
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur));
            i++;
        }
        i++;

        for(const sz of sizes) {
            res.push(str.substring(i, i+sz));
            i += sz;
        }

        return res;
    }
}
