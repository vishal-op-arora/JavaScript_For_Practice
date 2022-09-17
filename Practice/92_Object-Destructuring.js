// https://www.javascripttutorial.net/es6/javascript-object-destructuring/
// Array destructuring uses [] while Object destructuring uses {}.
const john = {
    name : 'John',
    age : 32,
    emailIds : [
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address : {
        city : 'Bangalore',
        pincode : 560100
    }
};

const name1 = john.name;
console.log(name1);


/**
 * varaible name name and age should john have 
 */
const {name, age} = john;
console.log(name, age);

// Rename the varaible
const {name : name3, age: age3} = john;
console.log(name3, age3);

const {name : name4, age: age4, address : { city } } = john;
console.log(name4, age4, city);


// city5 varaible created
const {name : name5, age: age5, address : { city : city5}  } = john;
console.log(name5, age5, city5);

// Array Destructuring
const {name : name6, age: age6, address : { city : city6}, emailIds : [primaryEmailID6]  } = john;
console.log(name6, age6, city6, primaryEmailID6);


// Skipping array element
const {name : name7, age: age7, address : { city : city7}, emailIds : [ , primaryEmailID7]  } = john;
console.log(name7, age7, city7, primaryEmailID7);