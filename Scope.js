// globla scope: Accessible throughout the program
const a = 10;
if(true){
    // block scope accessible within {}
    let a =2
}
// console.log(a);
// declaring var variable, doesn't follow  scope rules
// if defined in local scope, yet changes value of globally accessible
// variable value

// nested function case:
function fun(){
    let username = "User1"
    function fun2(){
        let website = "Generic Website"
        console.log(username);
        console.log(website);
    } 
    fun2()
}
fun()

// ++++++++++++++++++++++ Hoisting +++++++++++++++++++++
// defining function without assigning it to variable
console.log(add1(5)); // this case, can access function before function initialization 
function add1(num){
    return num + 1
}

// defining function by assigning it to variable
// ReferenceError: Cannot access 'addition' before initialization
console.log(addition(5));
const addition = function add2(num){
    return num + 2
}
 