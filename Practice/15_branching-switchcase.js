
var dayNumber = 0;
var day ='Monday';
var workingDayStatus;

switch(day){
    case "Sunday" : 
        workingDayStatus = "Today is " + day + " and Holiday :)" ;
        break;

    case "Saturday" : 
        workingDayStatus = "Today is " + day + " and Holiday :)" ;
        break;

    default:
        workingDayStatus = "Today is " + day + " and Not Holiday :)" ;
}

console.log(workingDayStatus);