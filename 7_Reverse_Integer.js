var reverse = function(x) {
    let multi = 1
    if (x < 0){
        multi = -1
    };
    let ans = multi * parseInt(x.toString().split('').reverse().join(''));
    return ((ans > (2**31 -1)) || (ans < (-(2**31))))  ? 0 : ans;
};


reverse(123) // #=> 321

// Runtime: 80 ms, faster than 94.10% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.4 MB, less than 59.24% of JavaScript online submissions for Reverse Integer.