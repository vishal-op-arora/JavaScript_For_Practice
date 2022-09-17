const sum = (x, y, callBack) =>{
    setTimeout(() => {
        callBack( x + y );
    }, 3000);
    return "Sum return";
};

console.log(sum(10, 20, (result)=>{
    console.log(result);

    sum(result, 30, function(result){
        console.log(result);
    });

}));