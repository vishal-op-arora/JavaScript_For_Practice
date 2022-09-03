function foo(x){
    console.log("foo was called");
}

foo();
foo("hello");
foo("hello", "world", "good");

function sum(x, y){
    for(var i =0, result = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
console.log(sum(10, 20, 30, 40, 50, 60));
