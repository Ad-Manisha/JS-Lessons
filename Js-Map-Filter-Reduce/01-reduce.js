/**
can be applied to an array but it doesn't return an array
*/

let array = [3,4,5,6,7]
//25

const result = array.reduce((sum, element)=>{
    return sum+= element
},10)

console.log(result);