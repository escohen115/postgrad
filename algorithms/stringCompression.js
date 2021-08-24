function stringCompression(str){
    let h = {}
    for (let i of str){
        h[i] ? h[i] += 1 : h[i] = 1
    }
    let answer = ''
    for (let i in h){
        answer += i
        answer += h[i]
    }

    return answer.length < str.length ? answer : str
}


stringCompression('abcdee')