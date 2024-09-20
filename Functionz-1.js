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
// console.log(login());  // log on console as undefined, if no value is provided.

// printing multiple arguements withouut use of loops
// using rest method to print multiple arguements

function total_products(...p1){
    return p1
}

// passing only p1: prints 1st arguement -> Mobile
// using rest method, prints each arguement -> [ 'Mobile', 'Laptop', 'Wires' ]

// console.log(total_products("Mobile","Laptop","Wires"));

const user = {
  username: "User1",
  membership: "General"  
}


//usage of anyobject in the function to access properties of any object
function handleObj(anyobject) {
    console.log(`User name is ${anyobject.username1} and membership is ${anyobject.memberId}`  );   
}
// usual method
// handleObj(user)

// able to create object within function calling
// handleObj({username1: "Sam",
//     memberId: 1001
// })

const newarray = [10,20,30,40,50]

function returnsecval(arr){
    return arr[1]
}

// usual way to access values of the array
// console.log(returnsecval(newarray));

// can access array, by defining within the calling functin
// console.log(returnsecval([10,20,30,40]));

