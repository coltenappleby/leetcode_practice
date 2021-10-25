var fourSum = function(nums, target) {
    if(nums.length < 4) return null;
    
    result = []

    function compare(arr1, arr2){
        for(let a = 0; a < arr1.length; a++){
            for(let b = 0; b < arr2.length; b++){
                if(arr1[a] === arr2[b]){
                    arr2.splice(b,1)
                    b = arr2.length
                }
            }
        }
        if(arr2.length === 0){
//             console.log("they are the same")
            return false;
        } else {
//             console.log("they are unique")
            return true;
        }
    }

    for(let i = 0; i < nums.length; i++ ){
        for(let j = i+1; j <nums.length; j++){
            for(let k = j+1; k <nums.length; k++){
                for(let m = k+1; m < nums.length; m++){
                    let sum = nums[i]+nums[j]+nums[k]+nums[m]
                    if(target === sum){
                        let sumArr = [nums[i],nums[j],nums[k],nums[m]]
                        let count = 0
                        for(let n = 0; n < result.length; n++){ 
                            if(compare(result[n], sumArr)){
                                count += 1 
                            }
                        }
                        if(count === result.length){
                            result.push(sumArr)
                        }
                    }
                }
            }
        }
    }
    return result

};

let nums = [1,0,-1,0,-2,2]
let target = 0
// output = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


let nums1 = [2,2,2,2,2]
let target1 = 8


console.log(fourSum(nums1, target1))