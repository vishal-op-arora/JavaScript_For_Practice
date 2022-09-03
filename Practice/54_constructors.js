/*
john = {
    name : 'John',
    age : 32,
    celebratingBirthday: function () {
        this.age++
    }
}

john = {
    name : 'Mary',
    age : 43
}
*/

function Person(name, age){
    //console.log(this);
    this.name = name;
    this.age = age;

    this.celebrateBirthday = function(){
        this.age++;
    }
    return this;
}

console.log(new Person());
var john = new Person("john", 34);
john.celebrateBirthday();
console.log(john);

var mary = new Person("Mary", 34);
mary.celebrateBirthday();
console.log(mary);

console.log(john.__proto__ == Person.prototype);
console.log(mary.__proto__ == Person.prototype);


console.log("---------------------------------------------------------------");

/**
 * john2 and mary2 don't have celebrateBirthday() function created in memory.
 * where john and mary has
 */
function Person2(name, age){

    this.name = name;
    this.age = age;

    return this;
}
Person2.prototype.celebrateBirthday = function(){
    this.age++;
};

var john2 = new Person2("john", 34);
john2.celebrateBirthday();
console.log(john2);

var mary2 = new Person2("Mary", 34);
mary2.celebrateBirthday();
console.log(mary2);

console.log(john2.__proto__ == Person2.prototype);
console.log(mary2.__proto__ == Person2.prototype);