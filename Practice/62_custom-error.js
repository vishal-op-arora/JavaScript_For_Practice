
/** 
 * We can use throw keyword to create and throw a custom error in JS.
 */
function sum(x, y){
    if(typeof x === "number" && typeof y === "number"){
        return x + y;
    }

    throw "only numbers are allowed as arguments";
}

try{
    console.log(sum(12, 13));
    console.log(sum(12, "abc"));
}
catch(error){
    console.log(error);
}


function add(x, y){
    if(typeof x === "number" && typeof y === "number"){
        return x + y;
    }

    throw new Error("only numbers are allowed as arguments");
}

try{
    console.log(add(12, "abc"));
}
catch(error){
    console.log(error);
}

try{
    console.log(add(12, 12));
} finally{
    
}