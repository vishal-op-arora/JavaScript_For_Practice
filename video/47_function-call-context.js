/* 
 * Function call context depends on -
 * The reference from where the function is called.
 * The location in the code from where you are calling a function will decide the function call context of that function.
 */ 

function foo(){
    console.log(this);
}

foo();

console.log('1 _____________________________________________________________________');

var john = {
    name : 'John',
    getName: function(){
        console.log(this);
        return this.name;
    }
}

console.log(john.getName());
console.log('2 _____________________________________________________________________');

var getName = john.getName;
getName();
