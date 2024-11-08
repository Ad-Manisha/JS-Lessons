function simpleFunction(){
    console.log("hi ! I'm simple function.");
}

simpleFunction();


//arrow function
const message = ()=> {
    console.log("hi ! I'm arrow function.");
} 
message();

//find age using arrow function

const age = (birthYear) => {
    console.log(2024-birthYear);
}

age(2001);

//simplified arrow function

const old = (birthYear) => console.log(2024-birthYear);

old(2001);