const num = 12356.112338
// console.log(num.toFixed(2));
// console.log(num.toPrecision(5));
// console.log(num.toLocaleString("en-IN"))

// console.log(Math)
// console.log(Math.abs(-4));      // returns +ve version -> -4 => 4 
// console.log(Math.round(4.6));   // returns round off number -> 4.6 => 5
// console.log(Math.ceil(4.05));   // returns next whole number -> 4.5 => 5
// console.log(Math.floor(4.2));   // returns current whole number -> 4.23 => 4
// console.log(Math.min(8,3,-2,0), Math.max(1123,50,-564));  // returns min and max number within array

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10, max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)
