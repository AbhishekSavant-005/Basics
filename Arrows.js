// Object in the browser is Windows object
// accessible through (this) function in the browser
//

const user = {
    name: "Sam",
    ID: 101,

    welcome: function(){
        // console.log(`Welcome to the Site,${this.name}`);
        // console.log(this);
        
        
    }
}
user.name = "Ram"
// user.welcome()
// console.log(this);

function window(){
    console.log(this);
}
// window()

// Arrow Function
const fun= ()=>{
    let name = "Sam"
    console.log(this);
} 
// fun()
// explicit return in arrow function
// used {}, then use return keyword
const add1 = function(a,c){
    return a+c
}
console.log(add1(3,9));

// implicit return in arrow function
const add = (num1, num2) =>  num1+num2
console.log(add(3,2));