var number = [20, 60, 40, 65, 80, 8, 22, 30, 3, 10, 200, 2, 3500];

console.log("Old Array --> ", number);

number.sort();

console.log("By alphabatically by default Sort in Array --> ", number); 

number.sort(function (x, y){
    console.log(x,y);
});

var newNumber = number;

number.sort(function (x, y){
    return x - y ;
});
console.log("Sorted in ascending order",number);

newNumber.sort(function(x, y){
    return y - x;
});

console.log("Sorted in decending order",newNumber);