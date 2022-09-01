/**
 * unshift :
 *  - Add element at the start of the array like push but at the start
 *  - You can unshift sngle or multiple elements in one shot
 * 
 * shift :
 *  - remove first element from the array like 
 *  
 */
var days = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday"];

console.log("Old Array  --> ", days);

//days.unshift("Sunday"); 
days.unshift("Saturday", "Sunday"); 
console.log("Unshifted Array --> ", days);

var removedDay = days.shift();
console.log(removedDay);
console.log("Shifted Array --> ", days);

//var splicedDays = days.splice(0,2); // Remove  from starting index 0 and 2 elements will be removed 
var splicedDays = days.splice(0,2, "Saturday", "Sunday", "Monday"); // Remove and add at same time
console.log("Spliced Array from days --> ", splicedDays);
console.log("days Array after Spliced --> ", days);


var slicedDays = days.slice(2, days.length); // create a copy from array
//var slicedDays = days.slice(2);
console.log("Sliced days from days Array --> ", slicedDays);
console.log("days Array after sliced No chage in days --> ", days);