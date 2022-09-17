/**
 * Some classes are Iterables. following can be classified as an iterable-
 *  - Class
 *  - Array 
 *  - String
 *  - Map
 * 
 */
// Map and Set bor are Iterables

const days = [
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday'
]

// for..of
for(let day of days){
    console.log(day);
}

const greeting = 'Good Morning';
for(let char of greeting){
    console.log(char);
}