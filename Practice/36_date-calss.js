var milleniumStart = new Date(2000, 0, 1, 5, 30);

console.log(milleniumStart); // 5:30 hr behind the GMT 

var today = new Date();
console.log("Today --> ", today);

today.setDate(today.getDate() + 1);
console.log("Today chnaged --> ", today);

var july31 = new Date(2020, 6, 31, 5, 30);
console.log("31st July --> ", july31);
july31.setDate(july31.getDate() + 1);
console.log("31st July + 1 Day --> ", july31);
