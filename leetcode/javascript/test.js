


function fizzBuzz() {
    var output = [];
    for (let i=1;i<5;i++){
        count = i
        if (count % 3 === 0 && count % 5 !== 0){
            output.push ("fizz");
            count++
        }
        if (count % 5 === 0 && count % 3 !== 0){
            output.push("buzz");  
            count++
        }
        if (count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz");
            count++
        }
        else{ 
            output.push(count);
            count++
        }
    }
    console.log (output);
}
fizzBuzz();
