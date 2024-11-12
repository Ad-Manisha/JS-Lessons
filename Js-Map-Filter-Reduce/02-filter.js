const numbers = [1,2,3,4,5];

//Find the double of even numbers from an array

const even = numbers.filter(element=> element%2 == 0).map((element)=>{
    return 2*element;
})

console.log(even);

