// 3. When Object Destructuring
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

const {age, name, address : {city}, ...otherDetialsOFJohn} = john;
console.log(name);
console.log(age);
console.log(city);
console.log("rest ------>>> ", otherDetialsOFJohn); // if any object touched while Object Destructuring that would not be part of rest