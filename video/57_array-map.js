var numbers = [1, 2, 3, 4];

var resultArray = numbers.map(function (item){
    return item * item;
});

console.log(resultArray);

var days = [
    { day : "Sunday", hours : 2},
    { day : "Monday", hours : 4},
    { day : "Tuseday", hours : 6},
    { day : "Wednesday", hours : 8},
    { day : "Thursday", hours : 7},
    { day : "Friday", hours : 5},
    { day : "Saturday", hours : 3}
];

var resultArray2 = days.map(function (item){
    if (item.hours >= 5){
        return item;
    }
});

console.log(resultArray2);

//some, every, reduce