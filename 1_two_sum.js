/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
    
};

console.log(twoSum1([2,7,11,15], 9))

// Runtime: 108 ms, faster than 49.84% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.3 MB, less than 79.08% of JavaScript online submissions for Two Sum.