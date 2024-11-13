//API call GET using .then() .catch()

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) =>{
        return data.jason()
    }).then((finalData)=> {
        console.log(finalData)
    })
    .catch((error) => {
        console.log(error.message)
    })



