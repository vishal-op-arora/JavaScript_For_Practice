/**
 * Functions as First-Class Objects in JavaScript: Why Does This Matter? (https://www.pluralsight.com/blog/data-professional/javascript-functions-as-first-class-objects#:~:text=Basically%2C%20first%2Dclass%20citizenship%20simply,be%20assigned%20key%3A%20value%20pairs.)
 * 
 * Functions in JavaScript are first-class objects (or “first-class citizens”). Fascinating, but… what does that mean? Why does it matter? Read on and we’ll have a look!
 * 
 * We’ll start with the basics: What does first-class citizenship mean in general? First-class citizenship, within the world of programming, 
 * means that a given entity (such as a function) supports all the operational properties inherent to other entities; 
 * properties such as being able to be assigned to a variable, passed around as a function argument, returned from a function, etc. 
 * Basically, first-class citizenship simply means “being able to do what everyone else can do.”
 * 
 * In JavaScript, functions are objects (hence the designation of first-class object). 
 * They inherit from the Object prototype and they can be assigned key: value pairs. 
 * These pairs are referred to as properties and can themselves be functions (i.e., methods). 
 * And as mentioned, function objects can be assigned to variables, they can be passed around as arguments; 
 * they can even be assigned as the return values of other functions. Demonstrably, functions in JavaScript are first-class objects.
 * 
 * One can get pretty creative with assigning functions to variables and passing them around to other functions from which they can be returned. 
 * If you’re not careful (or maybe if you just want to have a bit of fun!), 
 * the rabbit hole can get pretty deep, pretty quickly! Consider this… a function can be passed to itself and even returned from itself!
 * 
 * 
 * Excellent! But okay… who cares if JavaScript functions are first-class objects? What does it matter?
 * The beauty of JavaScript functions enjoying first-class citizenship is the flexibility it allows. 
 * Functions as first-class objects opens the doors to all kinds of programmatic paradigms and techniques that wouldn’t otherwise be possible. 
 * Functional programming is one of the paradigms that first-class functions allow. Additionally, 
 * listening for and handling multiple events by passing callback functions is a useful feature within JavaScript and 
 * is achieved by passing a function as an argument to the document object’s addEventListener method. 
 * The process would not be nearly as elegant if functions were not granted first-class citizenship within the language. 
 * Furthermore, the practices of closure and partial-application/currying would not be possible within JavaScript if functions didn’t enjoy the status of first-class.
 * 
 * In summation, with functions being first-class objects within JavaScript, 
 * developers are able to do all kinds of interesting things and explore all sorts of programming paradigms that wouldn’t be otherwise be possible. 
 * It is in part due to this functional first-classness that JavaScript has become the powerful and prolific language that it is today.
 * 
 */

/**
 * Function are object in JS
 */

function foo(callback){
    var x = 10, y = 20;
    var z = x + y;

    callback('inside foo');

    function retFn(){
        console.log('retFu called');
    }

    return retFn;
}

function bar(str){
    console.log(str, 'bar called');
}

var resultFn = foo(bar);
resultFn();
