//loop

const dog = {
    firstName: "ZuZU",
    lastName : "Gold",
    age : 2,
    isCute : true,
    color : "Golden"
}

//dog['key'] gives value 
console.log(dog['firstName']);

//print all keys of an object

for(let key in dog){
    console.log(key);
}

//print all values of an object

for(let key in dog){
    console.log(dog[key])
}

//print key and corresponding values of an object

for(let key in dog ){
    console.log(`${key} : ${dog[key]}`);
}