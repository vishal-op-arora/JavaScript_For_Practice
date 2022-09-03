
/**
 * Push : 
 *  - Add element at the end of the array
 *  - You can either push single or multiple elments in one shot 
 * 
 * Pop
 *  - Remove the last element from the array 
 */
var days = ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday"];
console.log("Old Array  --> ", days);

//days.push("Saturday");
days.push("Saturday", "Sunday");
console.log("New Array after push  --> ", days);

days.sort();
console.log("Sorted Array  --> ", days);

console.log(days.pop());
console.log("New Array after pop  --> ", days);

