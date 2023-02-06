function multiplicationOfNumber(number){
    let result = 0;
    for(let i =1; i<=7; i++){
        result = result *i;
    }
    return result;
}

const result = multiplicationOfNumber(7);
console.log(result);