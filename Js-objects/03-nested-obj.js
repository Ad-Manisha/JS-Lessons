// nested object [object inside another object]
const employee = {
    empId: 1,
    firstName : "Damon",
    lastName : "Salvatore",
    age : 45,
    address:{
        street: '64th Awesome street',
        city: "Mystic Falls",
        zip: 30370
    }
}

console.log(employee.address.city);