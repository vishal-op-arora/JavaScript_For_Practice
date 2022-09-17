/**
 * 1. when declearing function arguments
 * 2. When Array Destructuring
 * 3. When Object Destructuring
 */

// 1. when declearing function arguments
function sort(x, y, ...others){
    console.log(x);
    console.log(y);
    console.log(others);
};

sort(14, 78, 45, 10, 67);

// for addition parameter adter rest i.e. : A rest parameter must be last in a parameter list.
// function sort(x, y, ...others, z){
//     console.log(x);
//     console.log(y);
//     console.log(others);
// };

function sort(...numbers){
    console.log(numbers);
    console.log(numbers.sort());
}
