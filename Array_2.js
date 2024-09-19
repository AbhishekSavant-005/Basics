const even = [2,4,6,8]
const odd = [1,3,5,7,9]

// even.push(odd)
// const numbers = even.concat(odd)
// console.log(numbers);


// spread out operator, works as same as concat operator
// const num = [...even, ...odd]
// console.log(num);


//  flat: Returns a new array with all sub-array elements
//  - concatenated into it recursively up to the specified depth.
// const num = [1,2,3,4,[4,6,8],[5,[[7],9]]]
// const real = num.flat(3)
// console.log(real)

// from and isArray
// console.log(Array.from("Microsoft"))  // Convert from string, any other datatype into array
// console.log(Array.isArray("Microsoft")) // Checks if given element is array or not

// of: Returns a new array from a set of elements
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


