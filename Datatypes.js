let name = " Abhishek"
let age = 22
let isAdult = false
let percentage = 98.51212313
let status = null
console.log(typeof undefined)

let score = undefined
let convNum = Number(score)
console.log(convNum)
console.log(typeof convNum)

let intnum = 25
let stringnum = String(intnum)
console.log(stringnum)
console.log(typeof stringnum)

// String to number erry conversion 
console.log("1" + 2 + 2); // String on 1st position, no arithmetic operation takes place
console.log(1 + 11 + "1"); // String on last position, arithmatic ops takes place

//  Comparisons among number datatype
console.log(2 > 1, 2 < 1);

console.log(null > 0) // false  [Internal typecasting, where null is converted into 0.]
console.log(null === 0) // false [Checks both datatype and value]
console.log(null >= 0) // true 

// Primitive datatypes:- Call by value: String, Number, Boolean, null, Undefined, Symbol, BigInt
const name1 = "MicroSystems"
const number = 1995
const isStatus = true
const isProject = null
let isAllotted;
const id = Symbol("RD1021")


// Call by reference (Non Primitive) :- Array, Objects, Functions
const arr = [1,2,3,4,5]

let  myIntro = {                // Object defining
    name: "Abhishek",
    isCoder : true,
}

let print = function(){         // function defining
    console.log("Hey JS");  
}

// Memory Management: Stack [Primitive]  Heap [Non Primitive]

// eg of stack memory
let num = 2
let num1 = num
num1 = 3               // changes are made in the copy of reference variable in the stack
                       // where num value remains as it is

// eg of Heap memory
let user1 = {
name: "Samsung", 
device: "Laptop",
}

let user2= user1
user2.device = "mobile"     // changes made in the user2 affects value of user1 that are stored in heap
                            // thus both user2 and user1 values are changed
console.log(user1);
