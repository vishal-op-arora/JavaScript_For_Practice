/**
 * Description
    Write a program to calculate area of the three shapes,rectangle,square and circle-

    Create a function called rectangleArea having two input parameters length=5 and width=10 to calculate the area of a rectangle.
    Create a function called squareArea having one  input parameter edge length=5 to calculate the area of a square.
    Create a function called circleArea having one  input parameter radius of circle =5  to calculate the area of a circle.
    Call the above functions with dummy data to print the area on the console.
 */

function rectangleArea (length, width){
    return length * width;
};
console.log("Area of Rectangle :", rectangleArea(5, 10));


function squareArea(length){
    return length * length;
}
console.log("Area of Square :", squareArea(5));


function circleArea(radius){
    return (Math.PI * radius * radius).toFixed(2);
}
console.log("Area of Circule :", circleArea(5));
