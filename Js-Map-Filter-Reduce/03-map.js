const actors = [
    {
        id: 1,
        name: "Rajesh Hamal",
        age: 58
    },

    {   
        id: 2,
        name: "Dilip Rayamajhi",
        age: 48
    },

    {
        id: 3,
        name: "Biraj Bhatta",
        age: 50
    }
] 

const result = actors.map((actor, index)=>{
    return `${actor.id} : ${actor.name}`
})

console.log(result);