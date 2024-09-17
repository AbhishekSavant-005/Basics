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

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


const min = 10, max = 20
// console.log(Math.floor(Math.random() * (max - min +1)) + min)


// Date  and   Time

  let mydate = new Date()
//   console.log(mydate.toString())
//   console.log(mydate.toDateString())
//   console.log(mydate.toTimeString())
//   console.log(mydate.toLocaleString())

 let dob = new Date(2002, 8, 2)
// console.log(dob.toDateString());

// In js, Month starts from 0, jan -> 0, dec -> 11

let dob1 = new Date("01-23-2023")
// console.log(dob1);
// console.log(dob1.toLocaleTimeString());

// creating time stamp
let dob2 = Date.now()
// console.log(dob2);
// console.log(dob1.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getDay());

newdate.toLocaleString('default', {
    weekday: "long",
})