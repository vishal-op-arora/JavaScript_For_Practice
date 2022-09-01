/**
 * Math.random() always returns value between 0 to 1.
 * We scale that value with the proper logic in the required interval.
 */

console.log(Math);

console.log(Math.random()); // return 0 to 1 fractional value


var randomNumber= function(max){
    var random = Math.random();
    var result = (random * max);
    //result = result - (result % 1);
    //return result + 1;
    return Math.ceil(result);
}

var dice = {
    "0" : 0,
    "1" : 0,
    "2" : 0,
    "3" : 0,
    "4" : 0,
    "5" : 0,
    "6" : 0
}

for(var i = 0; i < 100; i++ ){
    var random = randomNumber(6);
    dice[random] += 1;
}

console.log(dice);
