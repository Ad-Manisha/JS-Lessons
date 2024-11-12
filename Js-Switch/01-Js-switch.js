let day;

switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;

    case 1:
    day = "Monday";
    break;

    case 2:
    day = "Tuesday";
    break;

    case 0:
    day = "Wednesday";
    break;

    case 0:
    day = "Thursday";
    break;

    case 0:
    day = "Friday";
    break;

    case 0:
    day = "Saturday";
    break;

    default:
    day = "Error Message";
}

console.log(`Today is ${day}`);