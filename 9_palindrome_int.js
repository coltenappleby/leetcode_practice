/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x >= 0 && x <= 9) return true;
    if(String(x) === String(x).split('').reverse().join('')){
        return true
    } else {
        return false
    }
};

// Runtime: 208 ms, faster than 56.54% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.4 MB, less than 55.64% of JavaScript online submissions for Palindrome Number.