var days = [
    { day : "Sunday", hours : 2},
    { day : "Monday", hours : 4},
    { day : "Tuseday", hours : 6},
    { day : "Wednesday", hours : 8},
    { day : "Thursday", hours : 7},
    { day : "Friday", hours : 5},
    { day : "Saturday", hours : 3}
];

days.forEach(function(item){
    console.log(item, "----------> ", item.day, item.hours);
});