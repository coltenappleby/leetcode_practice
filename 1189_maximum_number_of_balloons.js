/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let textObj = {}
    for(let i = 0; i < text.length; i++){
        if(!textObj[text[i]]){
            textObj[text[i]] = 1
        }
        textObj[text[i]] += 1  
    }
    
    let balloon = "balloon"
    let maxNum = 10e4-1
    for(let i = 0; i < balloon.length; i++){
        if(textObj[balloon[i]] === undefined){
            return 0;
        } else if(textObj[balloon[i]] < maxNum){
            maxNum = textObj[balloon[i]]
        } else {      
            continue;
        }
    }
    
};