function areThereDuplicates(){
   let freq = {}
   for (let i = 0; i < arguments.length; i++){
       if (freq[arguments[i]]){
           return true
       }
       else{
          freq[arguments[i]]=1
       }
   }
   return false
}

areThereDuplicates(1,2,2)


