/**
 * Syntax 
 */
(
    function(){
        console.log("Syntax");
    }
)
();

//-----------------------------------------with argument-------------------------------------------------------------

(
    function(arg){
        console.log("Syntax", arg);
    }
)
("my argument");

//------------------------------------------------------------------------------------------------------

(function(){
    var x = 10;
    console.log(x);

    y  = 20;
    console.log(y); // y will get created globally
})();