// 2. When Array Destructuring

const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thr',
    'Fri'
];

const [first, second] = days;
console.log(first, second);

const [first1, second1, ...restOfDays] = days;
console.log(first1, second1, restOfDays);

// error with last : A rest element must be last in a destructuring pattern.
// const [first2, second2, ...restOfDays2, last] = days;
// console.log(first2, second2, restOfDays2);