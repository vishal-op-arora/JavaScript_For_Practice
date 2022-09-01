

/**
 * Window,Navigator ,History and Location all are the global objects provided by the browser for a web page.
 *//**
 * alert is blocking method
 */

alert("This is an alert message !!!");
window.alert("This is an alert message !!!");
console.log("after alert");

/**
 * confirm dialog and it is blocking
 * Confirm() dialog method of window object returns true and false values 
 */

confirm("Do you really want to leave the website");
var userInput = window.confirm("Do you really want to leave the website");
if(userInput){
    console.log("Result is true.")
}
else{
    console.log("Result is false.")
}

/**
 * prompt dialog and it is blocking
 * Prompt() returns the String value.
 */
prompt("Enter your favorite city", "default value");
var prom = window.prompt("Enter your favorite city", "Bathinda");
console.log("Yoyr favroite city is", prom);
