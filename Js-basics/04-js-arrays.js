let colors = ['red', 'black', 'white', 'grey', 'blue']

console.log(colors);

//access array elements with index 
console.log(colors[0]);
console.log(colors[4]);

//modify elements
colors[3] = "purple";
console.log(colors);

//array length
console.log(colors.length)

//add element to the end of the array
colors.push("green");
console.log(colors);

//add element to the start of the array
colors.unshift("yellow");
console.log(colors);

//remove last element of the array
colors.pop();
console.log(colors);

//remove first element from  of the array
colors.shift();
console.log(colors)

//slice - not including the end
console.log(colors.slice(2,5));

//join() and return a string
// convert array to string
console.log(colors.join(','))
