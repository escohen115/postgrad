function sameFrequency(num1,num2){
    let freq1 = {}
    let str1=""
    str1+=num1
    let freq2 = {}
    let str2=""
    str2+=num2
    if (str1.length!== str2.length){
        return false
    }
  
    for (let i of str1){
        freq1[i] ? freq1[i]+=1 : freq1[i]=1
    }
   
    for (let i of str2){
        freq2[i] ? freq2[i]+=1 : freq2[i]=1
    }

    for (let key in freq1){
        console.log(key)
        if (freq1[key]!==freq2[key]){
            return false
        }  
    }

   
    return true
}

sameFrequency(11382,24801)