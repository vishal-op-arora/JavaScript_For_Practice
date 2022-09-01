var today = new Date(1987, 6, 3, 5, 30);

console.log(today);
today.setFullYear(1987);
console.log(today);

today.setMonth(10);
console.log(today);

today.setDate(5);
console.log(today);

today.setHours(15);
console.log(today);

today.setMinutes(45);
console.log(today);


/**
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
 * 
 * 
 * The setDate()Links to an external site. method sets the day of the month, based on the given instance’s current month. 
 * If a value is provided outside of the number of days available, the date instance month value will be adjusted (e.g. A setDate(32) in January will calculate as February 1st.)
 * so setDate(33) will give output as Feb 02,2020
 */
var d=new Date(2020,0,1, 5, 30);
d.setDate(33);

console.log(d);