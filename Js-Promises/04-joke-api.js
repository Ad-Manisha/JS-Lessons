async function getFunnyJokes(){
    try{
        const response = await fetch('https://official-joke-api.appspot.com/random_joke',{
            headers: {
              "Accept": "application/json"
            }
        })
        const finalData = await response.json();
        console.log(finalData);
    }catch(error){
        console.log(error.message);
    }
}

getFunnyJokes();