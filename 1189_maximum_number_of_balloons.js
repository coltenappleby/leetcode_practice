/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let textObj = {}
    for(let i = 0; i < text.length; i++){
        if(!textObj[text[i]]){
            textObj[text[i]] = 1
        } else {
            textObj[text[i]] += 1
        }
    }

    let balloon = "balloon"
    let balloonObj = {}
    for(let i = 0; i < balloon.length; i++){
        if(!balloonObj[balloon[i]]){
            balloonObj[balloon[i]] = 1
        } else {
            balloonObj[balloon[i]] += 1
        }
    }

    let maxNum = 10e4-1
    for(let i = 0; i < balloon.length; i++){
        if(textObj[balloon[i]] === undefined){
            return 0;
        } else if(textObj[balloon[i]]/balloonObj[balloon[i]] < maxNum){
            maxNum = Math.floor(textObj[balloon[i]]/balloonObj[balloon[i]])
        } else {    
            continue;
        }
    }
    return maxNum;
};

// maxNumberOfBalloons("nlaebolko")
// maxNumberOfBalloons("ballon")
maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw")

// failing on "nlaebolko" -- returning undefined
// it is not accounting for double letters
// maybe remove letters from the object? - remove maxNums from text obj
