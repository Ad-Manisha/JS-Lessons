//key-value pair
//key = properties

const student = {
    firstName : "Amrit",
    lastName : "Adhikari",
    age : 28,
    isAbroad : true
}

console.log(student);

//accessing values for a key
console.log(student.age); // using dot notation

console.log(student['firstName']); //using bracket notation


//Modifying Objects

student.lastName = "Sharma";
student['lastName'] = "Adhikari"
console.log(student);

//add a new key-value pair to existing object

student.weight = 65.70;

student['phoneNumber'] = 98765432

console.log(student);

//delete a key-value pair from an object 

delete student.phoneNumber;
console.log(student);

delete student['isAbroad'];
console.log(student);