var days = [
    { day : "Sunday", hours : 2},
    { day : "Monday", hours : 4},
    { day : "Tuseday", hours : 6},
    { day : "Wednesday", hours : 8},
    { day : "Thursday", hours : 7},
    { day : "Friday", hours : 5},
    { day : "Saturday", hours : 3}
];

var resultDays = days.filter(function(item){
    return true;
});
console.log(resultDays);

var resultDays1 = days.filter(function(item){
    return false;
});
console.log(resultDays1);

var resultDays2 = days.filter(function(item){
    if(item.hours >= 5){
        return true;
    }
});
console.log(resultDays2);

var resultDays3 = days.filter(function(item){
    return item.hours >= 5;
});
console.log(resultDays3);