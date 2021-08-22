var reverse = function(x) {
    let multi = 1
    if (x < 0){
        multi = -1
    }
    return multi * parseInt(x.toString().split('').reverse().join(''))
};

reverse(123)

reverse(1534236469) 
// Output 9646324351  // Expected 0 //   1027/1032 Questions Passed