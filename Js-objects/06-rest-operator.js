//rest operator ...
// used to group remaining properties 

const book = {
    title : "China Haraayeko Manchhe",
    author : "Haribamsha Acharya",
    price : 500.00,
    isbn : 234567,
    isInteresting : true
}

let{title, price , ...rest} = book; //destructuring

console.log(title);
console.log(rest);