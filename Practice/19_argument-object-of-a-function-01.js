function foo(x, y, z){
    console.log(x, y, z);
    console.log("foo was called");
    console.log("arguments type is ", typeof arguments); //arguments is an object
    console.log(arguments);
    console.log(arguments.length);
}

foo("Hello", "World", "Good", "Morning");