let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1/0;

console.log(num_1 - num_2); // output: -0.456; result: -0.45600000000000307
console.log((num_1 - num_2).toFixed(3));
console.log(num_3);
console.log(num_1/ "hello"); // NaN