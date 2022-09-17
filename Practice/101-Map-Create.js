const numbers = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);

console.log(numbers.size);
console.log(numbers.entries());
console.log(numbers.keys());
console.log(numbers.values());

console.log(numbers);
numbers.set(4, 'Four');
numbers.set('Five', 5);
console.log(numbers);
numbers.set(4, 5);
console.log(numbers);

console.log(numbers.get(3));

numbers.delete(2);
console.log(numbers);

for(let [key, value] of numbers){
    console.log(`         Key -> ${key} (type of ${typeof key}) and value -> ${value} (typeof ${typeof value})`);
}

numbers.clear();
console.log(numbers)