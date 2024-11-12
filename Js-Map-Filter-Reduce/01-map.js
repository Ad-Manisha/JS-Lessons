/**
 * map - function that takes another function
 * returns a new array with size of the array same as the original array
 */

let array1 = [1,2,3,4,5]

//let array2 = [5,10,15,20,25]

const result = array1.map((element) => {
    return 5*element; 
})

console.log(result);