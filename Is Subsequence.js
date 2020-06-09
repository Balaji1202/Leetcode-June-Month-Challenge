/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(const letter of s) {
        let index = t.indexOf(letter);
        if(index !== -1) {
            t = t.slice(index + 1);
        } else {
            return false;
        }
    }
    return true;
};
