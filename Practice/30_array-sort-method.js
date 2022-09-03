// Sort objects in array by hours 

var projects = [
    {hours : 20, name : "Project 1"}, 
    {hours : 60, name : "Project 2"}, 
    {hours : 40, name : "Project 3"}, 
    {hours : 65, name : "Project 4"}, 
    {hours : 80, name : "Project 5"}, 
    {hours : 8, name : "Project 6"}, 
    {hours : 22, name : "Project 7"}, 
    {hours : 30, name : "Project 8"}, 
    {hours : 3, name : "Project 9"}, 
    {hours : 10, name : "Project 10"}, 
];

console.log("Old Array --> ", projects);

projects.sort(function (x, y){
    return x.hours - y.hours ;
});
console.log("Sorted in ascending order",projects);

