//JS - String methods

let school = "Himalaya Primary School"

console.log(school.toLowerCase());

console.log(school.toUpperCase());

/*
indexOf()
-> takes substring, returns the first occurance of a substring (index)
-> if the substring does not exist, it returns -1
*/

console.log(school.indexOf('i'));


/*
    slice(start, end)
    extracts a section of a string from the start index upto the end index(not including end)
*/
console.log(school.slice(2,6));


/* 
    replace(search,replacement)
*/
console.log(school.replace('Primary','Secondary'));

console.log(school.replace('Primary','Secondary').toLowerCase());

console.log(school.replace('Primary','Secondary'.toLowerCase()));


//convert string to array

console.log(school.split(''))