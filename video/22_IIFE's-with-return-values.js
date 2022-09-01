/**
 * IIFE's with return values
 * 
 * this is not function declearation but look like function decleration
 */

const someVariable = (
    function (){
        return 100;
    }
)();

console.log(typeof someVariable);

const funcExpression = function(){
    return 20;
}
console.log(typeof funcExpression);