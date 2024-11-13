/**
 * 1. Create a function
 * 2. Open try{} catch{} block
 * 3.api call using fetch()
 * 4.place "await" keyword infront of a async task(returns Promise)
 * 5. Make the wrapper function "async"
 */

async function callExternalApi(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const finalData = await data.json()
        console.log(finalData)
    }catch(error){
        console.log(error.message)
    }     
}

callExternalApi();