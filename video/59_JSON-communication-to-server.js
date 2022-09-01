
/**
 * JSON,XML are the common data exchange formats between client and server.
 * Json objects always have key wrapped inside double quotes.
 */

const strProducts = `
[
    {
        "name" : "Hammer",
        "description" : "A claw hammer",
        "price" : 120,
        "isMetalic" : true,
        "rating" :{
            "min" : 2,
            "max" : 6
        }
    },
    {
        "name" : "Video game controller",
        "description" : "A video game controller",
        "price" : 12,
        "isMetalic" : false
    }
]
`;

console.log(strProducts);
console.log("-----------------------------------------");
var jsonToArray = JSON.parse(strProducts);
console.log(jsonToArray);

console.log("-----------------------------------------");
console.log(jsonToArray[0].name);

console.log("-----------------------------------------");

var newProduct = {
    name: 'Knife',
    description: 'Metal knife',
    price: 5,
    isMetalic: true
};

jsonToArray.push(newProduct);
console.log(jsonToArray);
console.log("-----------------------------------------");
var arrayToJSON = JSON.stringify(jsonToArray);
console.log(arrayToJSON);