let array1 = [1,22,23,46,57,71,99,100]

// expected array = [22,46,100]

const even = array1.filter((element)=>{
    return element%2 == 0;
})

console.log(even);

// expected array = [1,23,57,71,99]

const odd = array1.filter((element)=>{
    return element%2 != 0;
})

console.log(odd);
