// About Arguements and parameters
function myname(a, b){
   return (a+b);
}

let a = 5, b =null
const res = myname(a,b)
// console.log("res: ", res);


// returning the values from defined function
function login(username){
    // !username equals to (username === "undefined")
    if (!username){
        console.log("must provide username");
        return
    }
    return `${username} just logged now.`
}
console.log(login());  // log on console as undefined, if no value is provided.
 