/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    key = {
    '}':'{',
    ')':'(',
    ']':'['
    }
    
    let queue =[]
    for (let i=0;i<s.length;i++){
        if ((s[i] === '}') || (s[i] === ')') || (s[i] === ']' )){
            // immediately return false if a closer comes before an opener that isn't last on the queue
            if (queue[queue.length-1] !== key[s[i]]){
                console.log(`i:${i} queue:${queue}`)
                return false
            }
            else{
                queue.pop()
            }
        }
        else if ((s[i] === '(') || (s[i] === '{') || (s[i] === '[' )){
            queue.push(s[i])        
        }
    }
    if (queue.length === 0){
        return true    
    }
    else{
        return false
    }
};



// create a queue of all parentheses

// "(({[]})"


// every time we open, we must find a matching closer
// any closer must match the last unclosed opener


// create a queue of parentheses in order they appear
// ['}','(','{',]
// a closer may only get on queue if the queue contains the opener for it. otherwise false
// any closer must match the last opener
