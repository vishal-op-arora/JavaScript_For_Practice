/**
 * Syntax
 */

(
    function(){
        console.log("Syntax");
    }
()
);

//----------------------------------------with argument object--------------------------------------------------------------

(
    function(){
        console.log("Syntax", arguments[0]);
    }
("my arguments")
);

//------------------------------------------------------------------------------------------------------

(function(){
    var x = 10;
    console.log(x);

    y  = 20;
    console.log(y); // y will get created globally
}());
console.log(y);