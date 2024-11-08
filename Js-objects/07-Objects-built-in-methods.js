const book = {
    title : "China Haraayeko Manchhe",
    author : "Haribamsha Acharya",
    price : 500.00,
    isbn : 234567,
    isInteresting : true
}

//one way to find corresponding value of the key of an object 

for(let key in book){
    console.log(`${key} : ${book[key]}`)
}

// using Object built-in method
console.log(Object.keys(book));    //returns array of keys

console.log(Object.values(book));  //returns array of values

console.log(Object.entries(book));  //returns array of entries