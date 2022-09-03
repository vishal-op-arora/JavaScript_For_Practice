/**
 * Array letral syntax
 * - No out to bound index
 * 
 */
var mixedTypeArray = [];
console.log(mixedTypeArray.length, typeof mixedTypeArray, mixedTypeArray);

mixedTypeArray.push(1.23);

var x = 10;
mixedTypeArray.push(x);

var isArray = true;
mixedTypeArray.push(isArray);

var myString = "Hello !!!";
mixedTypeArray.push(myString);

var y;
mixedTypeArray.push(y);

mixedTypeArray.push(null);

var shoaly = {
    name : 'Sholay',
    cast : ['Amitab', 'Hema', 'Dharmendra', 'Jaya'],
    boxOfficeStats : {
        countries : 10,
        collection : 12300000
    }
};

mixedTypeArray.push(shoaly);

mixedTypeArray[10] = "Add item at 10th index";

console.log(mixedTypeArray.length, typeof mixedTypeArray, mixedTypeArray);

console.log(mixedTypeArray[14]);

