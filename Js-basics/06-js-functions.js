function add(a,b){
    console.log(a+b);
}

add(2,4);

// Write a function that takes a sentence and returns number of words in it 

function countWords(sentence){
    let words= sentence.split(' ');
    let noOfWords = words.length ;
return noOfWords;
}
console.log(`There are ${countWords("Hello Brother")} words in the given sentence .`);