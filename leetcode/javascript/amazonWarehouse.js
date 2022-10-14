









function newMethod (s){
    let status = null

    function toggle(){
        status = status === 'stop' ? 'start': 'stop'
    }
    let total = 0
    let counter = 0

    for(let i=0;i<s.length;i++){
        if(s[i]==='|'){
            toggle()
        }
        if(status === 'stop'){
            total+=counter
            counter=0
            toggle()
        }
        else if(status ==='start'){
            counter++
        }
        
    }
    return total
}
console.log(newMethod("|**|*|"))