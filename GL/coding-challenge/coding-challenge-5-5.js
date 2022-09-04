/**
 * Description
    Store the given numbers in an array 33,45,2,88,36,17,81,50,28.

    Sort and print the original array  in lexicographical order.
    Sort and print the number in the ascending order and print them.
    Add two more numbers to the array 10,501.
    Sort the array again and make an array of the largest five numbers from the above array using array’s methods.
 */

var arr = [33,45,2,88,36,17,81,50,28];
console.log("Intial Array :",arr);

arr.sort();
console.log("Array sorted in Lexicographical order :", arr);

arr.sort(function(x, y){
    return x - y;
});
console.log("Array Sorted in Ascending order :", arr);

arr.push(10);
arr.push(501);
console.log("Array after adding two numbers to it :",arr);

arr.sort(function(x, y){
    return x - y; // for decending return y - x ;
});
console.log("Array Sorted in Ascending order :", arr);

var newArray = arr.slice(arr.length-5);
console.log("array of the largest five numbers :", newArray);