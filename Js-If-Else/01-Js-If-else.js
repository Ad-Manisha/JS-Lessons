function greetings(time){
    if(time<=10){
        console.log("Good morning!")
    }
    else if(time<=18){
        console.log("Good day!")
    }
    else{
        console.log("Good Evening!")
    }
}

greetings(20);

greetings(5);