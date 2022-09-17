/**
 * Set
 *  - Single value
 *  - Unique value
 */

const primes = new Set([2, 3, 5, 7, 9, 11, 13]);
console.log(primes);
console.log(primes.size);

primes.add(17);
console.log(primes);

console.log(primes.add("Nineteen"));
primes.add(17)
console.log("Add 17 ", primes);

console.log(primes.delete(17));
console.log(primes);

console.log("has 17", primes.has(17));

for(values of primes){
    console.log(values);
}