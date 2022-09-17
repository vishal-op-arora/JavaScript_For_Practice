/**
 * Promise use for sync
 * then() will be executed when the resolve function is called inside the promise handler function class 
 * while catch() will be executed when the reject function is called inside the promise handler function
 * After a promises is set to resolve state it will return data to then() while in case of reject catch() will be referenced.
 *  
 * resolve and reject are just variable names.. it can ba anything depends on context
 */

const sum = (x, y) =>{
    const promise = new Promise( (resolve, reject) => {

        if(typeof x !== 'number' || typeof y !== 'number'){
            return reject(new Error('Both targuments must be number'));
        }

        setTimeout(() => {
            resolve( x + y );
        }, 3000);
    });
    
    return promise;
};

const promise = sum(1,2);
promise.then((result) => console.log(result));

const promise2 = sum(10,"20");
promise2
    .then((result) => console.log(result))
    .catch(error => console.log(error.message));

const promise3 = sum(20, 30);
promise3
    .then((result) => {
        console.log(result);
        return 99;
    })
    .then((value) => console.log(value))
    .catch(error => console.log(error.message));

const promise4 = sum(100, 200);
promise4
    .then((result) => {
        console.log(result);
        return sum(result, 300);
    })
    .then((value) => console.log(value))
    .catch(error => console.log(error.message));
