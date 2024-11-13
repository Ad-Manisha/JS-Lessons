function fetchDogImages(){
    const breed = document.getElementById('breed').value.toLowerCase();
    const imgs = document.getElementById('imgs');
}

imgs.innerHTML = '';

async function getDogImages(){
    try{
        const response = await fetch(`https://dog.ceo/api/breeds/image/random?breed=${breed}`)
        const result = await response.json();
        
        if(result.status === 'success'){
            const imageUrl = result.message;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = breed;
            imgs.appendChild(imgElement);
        }else
        {
            imgs.innerHTML = 'Breed not found'
        }
    }
    catch(error) {
        console.log(error.message);
    }
}
getDogImages()