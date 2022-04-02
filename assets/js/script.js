/* This script displays a greeeting to the user based upon the current Time
it is an example from Javascript and jquest book */

let today = new Date(); // create a new date object
let hourNow = today.getHours(); // Find the current hour
let greeting;

//Display the appropriate greeting bacsed on the current time
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}


