let array1 = [3,4,5,6,7]

//let required array = [9,16,25,36,49]

let result = array1.map(element=> element*element)

console.log(result)


const fruits = ['apple', 'banana', 'grapes','papaya','pear']

// expected result = ["1:apple","2:banana","3:grapes".....]
//index+1 : element

const resultArray = fruits.map((element, index)=>`${index+1}:${element}`)

console.log(resultArray);