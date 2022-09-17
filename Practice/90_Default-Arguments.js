function greeting(message, name) {
    return `${message} ${name}!    __1`;
}

console.log(greeting('Good Moring', 'John'));
console.log(greeting('Good Moring'));
console.log('2-----------------------------------------------------------------');

function greeting2(message, name ='World') {
    return `${message} ${name}!    __2`;
}

console.log(greeting2('Good Moring', 'John'));
console.log(greeting2('Good Moring'));
console.log('3-----------------------------------------------------------------');

function greeting3(message='Hello', name ='World') {
    return `${message} ${name}!    __3`;
}
console.log(greeting3('Good Moring', 'John'));
console.log(greeting3('Good Moring'));
console.log(greeting3());
console.log(greeting3(undefined, 'John')); // If a input parameter is passed a undefined value, and if that parameter also have a default value ,then that default value will be used.
console.log('4-----------------------------------------------------------------');

function hello(){
    return 'Hello';
};

function good(){
    return 'Good Morning';
}

/**
 * Default function argument
 */
function greeting4(message = hello, name ='World') {
    return `${message()} ${name}!    __4`;
};

console.log(greeting4(good, 'John'));
console.log(greeting4(good));
console.log(greeting4());
console.log(greeting4(undefined, 'John'));

console.log('5-----------------------------------------------------------------');

var hello2= function(){
    return 'Hello2';
};

var good2 = function(){
    return 'Good Morning';
}

/**
 * Default function argument
 */
function greeting5(message = hello2, name ='World') {
    return `${message()} ${name}!    __5`;
};

console.log(greeting5(good2, 'John'));
console.log(greeting5(good2));
console.log(greeting5());
console.log(greeting5(undefined, 'John'));