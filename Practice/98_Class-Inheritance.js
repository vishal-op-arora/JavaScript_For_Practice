class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    celebrateBirthday(){
        this.age++;
    }
}

class Employee extends Person {

}

const john = new Employee('John', 32);
console.log(john);


class Employee2 extends Employee {
    constructor(name, age, role, dept){
        super(name, age); // called super class constructor
        this.role = role;
        this.dept = dept;
    }

    promote(){
        this.role = 'Senior ' + this.role;
    }

    celebrateBirthday(){
        super.celebrateBirthday(); // called the super class method
        console.log('Happy Birthday ' + this.name + '!');
    }
}

const john2 = new Employee2('John', 32, 'Web Developer', 'IT');
console.log(john2)

console.log("-----------------------------------------------------------------------------");
john2.promote();
console.log(john2);

console.log("-----------------------------------------------------------------------------");
john2.celebrateBirthday();
console.log(john2);

console.log("-----------------------------------------------------------------------------");

/**
 * Static method : https://www.w3schools.com/js/js_class_static.asp
 * 
 * Static class methods are defined on the class itself.
 * You cannot call a static method on an object, only on an object class.
 */
class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
}

let myCar = new Car("Ford");
console.log(myCar);
