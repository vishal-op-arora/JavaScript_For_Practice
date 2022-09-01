/**
 * String is immutable
 *  - orginal string does not manipulate
 * 
 * String are immutable in Javascript means you can not change an existing object of string, instead you have to create a new one with the required changes. 
 */
var quote = "With great power comes great resposibility";

var pieceOfTheQuote = quote.substring(11, 22);

console.log(quote);
console.log(pieceOfTheQuote);

var pieceOfTheQuote2 = quote.substring(11);
console.log(quote);
console.log(pieceOfTheQuote2);
