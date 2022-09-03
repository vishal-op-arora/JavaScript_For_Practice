var quote = "With great power comes great resposibility";
console.log("String -->", quote);

var firstIndexOfGreat = quote.indexOf("great");
console.log("great index from start -->", firstIndexOfGreat);

var lastIndexOfGreat = quote.lastIndexOf("great");
console.log("great index from last -->", lastIndexOfGreat);

console.log("greatest not found in the string hence index is -->", quote.indexOf("greatest")); // not found hence it is -1
