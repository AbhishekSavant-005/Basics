// Immediately Invoked Function Expressions 
// used to execute the function immediately

// named IIFE
(function num(){
    n = "User1",
    loginID = 123
    console.log(`${n} and ${loginID}`);   
})();
// ';' is used to connect both function
// IIFE function
((name) =>{
    console.log(`DB connected to user:${name}`);
    
})('SAM')