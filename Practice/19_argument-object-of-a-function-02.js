function sum(){
    for(var i = 0, result = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum());
console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));