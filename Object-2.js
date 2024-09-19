// Singleton Object
// const appUser = new Object()
// non singleton Object
const appUser = {
    id: 123,
    name: "Samy",
    isloggedin : false
}

// console.log(appUser);

// Nested Object
const Application = {
    type: "E-commerce Application",
    ecom: {
        Products: {
            1: "Electronics",
            2: "General",
            3: "Edible Items",
            4: "Sports Equipment"
        },
        price: {
            low: "within 150",
            mid: "below 1000",
            high: "below 20,000"
        }
    }
}
// console.log(Application.ecom);   // acccessing nested object property

const o1 = {1:'a',2:'b'}
const o2 = {3:'c',4:'d'}

// Copy the values of all of the enumerable own properties
// from one or more source objects to a target object. 
// Returns the target object. static method{target object{}, source}
// else objects are added into o1
// const o3 = Object.assign({},o1,o2)
// console.log(o3);

// using spread technique: to concat 2 objects into final object.
const o3 = {...o1, ...o2}
// console.log(o3);
// console.log(Object.entries(appUser)) // [ [ 'id', 123 ], [ 'name', 'Samy' ], [ 'isloggedin', false ] ]
// console.log(Object.keys(appUser))    // [ 'id', 'name', 'isloggedin' ]
// console.log(Object.values(appUser))  // [ 123, 'Samy', false ]

console.log(appUser.hasOwnProperty("price"));
