// Spread Operator - copy or merge objects

const movie = {
    title : 'Raju Raja Ram',
    length : '3 hrs',
    director : "Shobhit Basnet",
}

const copyMovie = {...movie, releasedDate: '23 nov 2024'}

console.log(copyMovie);