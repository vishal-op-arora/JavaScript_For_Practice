
/**
 * Destructuring means to break down a complex structure into simpler parts. 
 * With the syntax of destructuring, you can extract smaller fragments from objects and arrays. 
 * It can be used for assignments and declaration of a variable.
 * 
 * Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. 
 * When destructuring an array, we use their positions (or index) in an assignment.
 */
const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thr',
    'Fri'
];

const first = days[0], second = days[1], third = days[2], fifth = days[4], sixth = days[6];
console.log(first, second, third, fifth, sixth);

// Destructuring
const [first1, second1, third1, fifth1, sixth1] = days;
console.log('Destructuring -->', first1, second1, third1, fifth1, sixth1);


// Skipping element
const [first2, second2, third2, , , sixth2] = days;
console.log('Skipping 2 element -->' , first2, second2, third2, sixth2);

/**
 * Assigning defalut Value
 * since the sixth3 is undefined thats why assigned the default value 'Holiday'
 * But for forth already value exisit hence value taken from array i.e. '
 *  */ 
const [first3, second3, third3, forth3 ='Holiday', fifth3, sixth3 = 'Holiday'] = days;
console.log('Assigning defalut Value on 4th n 6th -->', first3, second3, third3, forth3, fifth3, sixth3);