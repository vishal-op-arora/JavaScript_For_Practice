/**
 * Spread syntax (...)
 * Spread syntax (...) allows an iterable, 
 * such as an array or string, to be expanded in places where zero or more arguments (for function calls) or 
 * elements (for array literals) are expected. 
 * In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
 * 

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
 */

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6

  
const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);
console.log(d);

/**
 * Which are the cases
 * 1. It can be used to pass the elements of an array as the separate arguments to a function
 * 2. It can be used to concatenate two or more arrays
 * 3. It can be used to create a shallow copy of an object(only primitive values rest will be deep copied) into another.
 */

const nums = [10, 45, 56, 78, 33];

/**
 * Math.max accept comma-seprated values not array
 */
// 1. Pass items of array as argument
console.log(Math.max(10, 45, 56, 78, 33)); 
console.log(Math.max(nums)); // This will not work .. // NaN
console.log(Math.max(...nums));

// Spread out items in array into comma-seprated values
const arr1 = [1, 2, 3], arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// 2. Object spread
const john = {
  name : 'John',
  age : 32,
  nationality : 'German',
  emailIds : [
      'john@gmail.com',
      'john@yahoo.com'
  ],
  address : {
      city : 'Bangalore',
      pincode : 560100
  }
};

console.log(john);
/**
 * It is shallow copy not deep copy
 */
const JohnCopy = {
  ...john
};
console.log(JohnCopy);

console.log("------------------------------------------------");
/**
 * Both the objects i.e. John and JohnCopy has their own primitive data type. 
 * Change in one data type for one object will not impact to the other object
 * 
 * Both the objects i.e. John and JohnCopy share the same obejct i.e. 'emailIds' and 'address'
 * Change in any of the object i.e. 'emailIds' or 'address' will change for both John and JohnCopy 
 * Becase both the Object are point to same sub-objects 
 */
JohnCopy.name = 'Jonathan';
JohnCopy.emailIds.push('john@aol.com');

console.log(john);
console.log(JohnCopy);