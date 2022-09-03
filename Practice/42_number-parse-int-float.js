
/**
 * parseInt and parseFloat are the static methods of Number class which can be called by the name of class i.e Number.
 */
console.log(Number.parseInt("3.56"));
console.log(Number.parseInt("3.56", 10));
console.log(Number.parseInt(5.56, 10));
console.log(Number.parseInt(17, 8));
console.log(Number.parseInt("FF", 16));

console.log("-------------------------------------------------------------");
console.log(Number.parseFloat("3.56", 10));
console.log(Number.parseFloat(5));

console.log("-------------------------------------------------------------");
/**
 * Number.parseInt() will parse the number into only integer means no decimal part will be there. 
 * While parseFloat() will keep the decimal part also . 
 * The other argument that parseInt and parseFloat method take is the representation notation ie. decimal,binary,hexadecimal etc. 10 represents decimal and 16 represents hexadecimal.
 */
console.log(parseInt("3.56",10));
console.log(parseFloat("3.56",10));
console.log(parseInt("a",16));

console.log("-------------------------------------------------------------");

