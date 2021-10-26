var romanToInt = function(s) {

    const romans = {
        'I': 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000 
    }

    let arr = s.split('')
    let sum = 0
    // let prev = arr[0]
    let i = 0
    while(i < arr.length) {
        let curr = romans[arr[i]]
        if(i+1 === arr.length) {
            sum += curr
            break
        }
        let next = romans[arr[i+1]]
        if(curr >= next){
            sum += curr
            i += 1
        } else {
            sum += next-curr
            i += 2
        }
    }
    return sum
    
};