
try{
    foo();
    console.log("-----> after foo called with in try block");
}
catch(error){
    console.log(error.message);
    //console.log(error); //error stack
    console.log("-----> after foo called within catch block");
}
finally{
    console.log("-----> inside finally always execute irrespect of execution brak of the program.")
}

console.log("-----> after foo called");


/**
 * without catch 
 */
try{
    foo();
}   
finally{
        console.log("Finally block called")
    
}
