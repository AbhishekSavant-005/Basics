// Array creating

// const arr = [1,2,3,4,5, true,"JS"]
// console.log(arr[5]);

// var num = new Array(1,2,3,4)
// console.log(num);

// Array Methods

// arr.push(6)              // Inserts elements at last position
// arr.unshift(12)          // Inserts elements at 1st position
// arr.pop()                // deletes last element
// arr.shift()              // deletes 1st element
// const newarr = arr.join()
// console.log(typeof(newarr));

// Slice , Splice

const arr = [0,1,2,3,4,5]
// console.log(arr);
const arr1 = arr.slice(1,3) // acts as copycat, does not affect main array
console.log(arr);           // It creates a new array by copying a portion of an existing array
console.log(arr1);
const arr2 = arr.splice(1,3,) // acts as shapeshifter, where affects n manipulates main array
console.log(arr);                    // able to remove elements from main array, add new elements into main arr
console.log(arr2);                   // in splice arr, prints (number, count to delete number)


