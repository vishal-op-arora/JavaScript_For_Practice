var today = new Date();

console.log(today);

/**
 * Second argument to date() is the Month argument which is zero-based. With a range of 0-11 (using western calendars.)
 * ‘February’ has an index value of one. (Think of it like an array lookup.)
 * 
 * browser output is : Sat Feb 01 2020 00:00:00 GMT+0530 (India Standard Time)
 * "2020-01-31T18:30:00.000Z" 
 */


const date1=new Date(2020,1,10);  

console.log(date1);