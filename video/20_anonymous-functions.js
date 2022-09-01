/**
 * function pass a argument 
 */


const sum = function(x, y, cb){
    var result =  x + y;
    cb(result);
}


function firstLogResult(result){
    console.log("firstLogResult", result);
}

function secondLogResult(result){
    console.log("secondLogResult", result);
}

sum(10, 20, firstLogResult); // logResult is reference of logResult function.
sum(10,20, secondLogResult);


/**
 *  - thirdLogResult function will called once as definded in function argumants 
 */
sum(10, 20, function thirdLogResult(result){
    console.log("thirdLogResult", result);
});

/**
 * Anonymous Functions 
 *  - don't have name
 *  - called once  
 */
sum(10, 20, function (result){
    console.log("forthLogResult", result);
});