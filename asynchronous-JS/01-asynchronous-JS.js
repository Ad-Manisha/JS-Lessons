/**
 * Long time taking tasks can run in the background, allowing the rest of the code to continue
 * without waiting
 */

console.log("Start")

function asynchronousTask(){

    setTimeout(()=> {
        console.log("Asynchronous Task Running...")
    }, 3000 )
}
asynchronousTask();

console.log("End")
