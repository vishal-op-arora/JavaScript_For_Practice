/**
 * Write a program to do the below operations in js-

    Create a date object of the date (6 Jun, 2021)
    Create a date object of the year 2000 to do the next operation.
    Check whether the given date(6 Jun,2021) is after or in the year 2000.
 */

var dateObj = new Date(2000, 0, 6, 5, 30);
console.log(dateObj);

var refDate = new Date(2000, 0, 1, 5, 30);
console.log(refDate);

if(refDate <= dateObj){
    console.log("Given date is after or in the 2000 year");
}
else{
    console.log("Given date is before or in the 2000 year");
}