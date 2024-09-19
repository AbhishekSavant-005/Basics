// sinlgeton : object becomes singleton, only if it is created with constructor.

// Object literals

// accessing values of the properties

// const JsUser = {
//     name: "Microware",
//     "Best Products" : "Electricals",
//     location: "Bangalore",
//     sector: "Manufacture",
//     mail: "microware@gmail.com"
// }

// two ways to access the values in the Objects
// console.log(JsUser.location);
// console.log(JsUser.Best Products) can't access keys having space within
// console.log(JsUser["Best Products"]); // Solution

// Using Symbol in the object
// Case: Create symbol and use it as key in the object to access the values.
const mysym = Symbol("key1")
const JsUser = {
    name: "Microware",
    mysym1 : "Current Within ",  // prints value in the form of String instead of Symbol
    [mysym]: "Current Present Within", // [right way to access key]
    "Best Products" : "Electricals",
    location: "Bangalore",
    sector: "Manufacture",
    mail: "microware@gmail.com"
}

// console.log(typeof(JsUser.mysym1)); // key in the form of Symbol
// console.log(typeof JsUser[mysym]); // key in the form of Symbol

// Changing the value of properties
JsUser.mail = "microwave@yahoo.com"
// Object.freeze(JsUser) // Prevents the modification of existing property attributes and values,
                      // and prevents the addition of new properties.
JsUser.name = "MacroWave"
// console.log(JsUser);

// defining n priting function:
JsUser.greeting = function() {
    console.log("Welcome to MicroWave....."); 
}
JsUser.greeting2 = function() {
    console.log(`Hello MicroWave User: ${this.name}`); 
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
