var numbers = [10, 20, 30, 21, 22, 32, 9, 6, 4, 40, 99, 87, 56, 88, 1, 44];

console.log(numbers);

console.log(Math.min(10, 20, 30, 21, 22, 32, 9, 6, 4, 40, 99, 87, 56, 88, 1, 44));
console.log(Math.max(10, 20, 30, 21, 22, 32, 9, 6, 4, 40, 99, 87, 56, 88, 1, 44));

console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));
