/**
 * Used for a result that is not yet available
 * PENDING, FULFILLED, REJECTED
 */

//CREATE A PROMISE

function pizza(){
    return new Promise((resolve,reject)=>{
        let isPizzaReady = false
        console.log("Currently Making Pizza....")

        isPizzaReady = true
        if(isPizzaReady){
            resolve("Pizza is ready!")
        }else{
            reject("No Pizza dor you Today !")
        }
    })
}

//CONSUMING A PROMISE - .then() .catch()

pizza().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log("---------------------")

//CONSUMING A PROMISE - async/await

async function consumePizzaOrder(){
    try{
        let data = await pizza();
        console.log(data)
    }catch(error){
        console.log(error);
    }
}
consumePizzaOrder()