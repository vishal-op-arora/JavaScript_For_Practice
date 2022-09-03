
// Immediately Invoke Function Expression (IIFE) : To avoid the creation of Global variable

/*
1. function call sum(10, 20, logResult);
2. call sum and pass argument x, y, and logResult function name 
3. call 
*/
(function(){
    const sum = function(x, y, cb){
        var result = x + y;
        cb(result);
    }
    
    function logResult(result){
        console.log("logResult function", result);
    }
    
    sum(10, 20, logResult);
})();


(function(){

    const sum = function(x, y, cb){
        var result = x + y;
        cb(result);
    }
    
    // Function argument as anonymous function
    sum(30, 40, function (result){
        console.log("anonymous function", result);
    });

}());

// IIFE by Argument
(function(str){

    console.log(str);

})("Hello IIFE !!!");

var iifeReturn = (function(str){
    return str;
})("Hello IIFE returning value");

console.log(iifeReturn);



//////////////////////////////////////////////////////////////
/*
    We are passing a print function as a parameter to functional expression func which passes arguments x and y as parameters while calling print function.
    So the print function will print x+y.
*/
var func = function(x,y,f){
    f(x+y);
}

function print(result)
{
    console.log(result);
}
func(5,4,print);


(function(){

    const sum = (function(x,y){
        return x+y;        
    })(10,20);

    const sumAgain=function(x,y){
        return x+y;
    }

    console.log(sum==sumAgain);
    console.log(sum==sumAgain(10,20));
    
    // Difference between == and ===
    console.log(sum=="30");
    console.log(sum==="30");

})();