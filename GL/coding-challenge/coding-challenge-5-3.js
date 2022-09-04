/**
 * Description
    Write  a program having IIFE to calculate area of rectangle having length=5 and width=10, a square having edge length=10,  and a circle having radius 7-

    Create IIFE for each shape having the proper input parameters and return the value of calculated area to a variable.
    Print the value of those calculated areas.
 */

    var rectangleArea = function (length, width){
        return length * width;
    };
    console.log("Area of Rectangle :", rectangleArea(5, 10));
    
    
    var squareArea = function(length){
        return length * length;
    }
    console.log("Area of Square :", squareArea(5));
    
    
    var circleArea = function(radius){
        return (Math.PI * radius * radius).toFixed(2);
    }
    console.log("Area of Circule :", circleArea(5));