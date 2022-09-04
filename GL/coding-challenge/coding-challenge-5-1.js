
function hello1(){
    console.log("Hello World 1 !!!");
}

hello1();

var hello2 = function(){
    console.log("Hello World 2 !!!");
}

hello2();

var hello3 = hello2; // Function reference
hello3(); // function call