/**
 * one line runs, then Next line runs
 * Each line waits for the previous line to complete before moving on.
 */

console.log("Start");

function synchronousTask(){

    for(let i = 0; i < 5; i++){
        console.log(`Doing Task : ${i}`);
    }
}
synchronousTask();

console.log("End");