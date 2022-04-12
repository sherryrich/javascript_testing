//Defining Functions
//Working with Arguments
//Function Return Value
//Function Exercises
//Used for reusable prcedures, define chunk of code and execute at a later stage
//Step 1 = Define
//Step 2 = Run
// function funcName () {
//     do something
// }
// in general define first then execute, call the function after.
// function singSong () {
//     console.log("DO");
//     console.log("RE");
//     console.log("ME");
// }
// singSong ()
// singSong ()
// singSong ()
//ARGUMENTS - accept inputs into the parentheses
// no inputs example "hellow".toUpperCase();
// arguments exammple "hello".indexOf("h"); // 0
// arguments exammple "hello".indexOf("o"); // 4
// exmplae nums.push(5,6,7) would push 5,6,7 to an array. Passing argument to the method.
// function greet(firstName) {
//     console.log(`firstName is: ${firstName}`) // output call greet(richard) = firstName is: richard
// }
// example above person = parameter, ie a placeholder variable, when we call it and pass it in its an argument.
// if you enter greet() // output will be "hey there, undefined!"
// function rant(message) {
//     console.log("I hate beets".toUpperCase());
//     console.log("I hate beets".toUpperCase());
//     console.log("I hate beets".toUpperCase());
// }
// rant();
// function greet(firstName, lastName) { // can define functions that accept >1 parameter 
//     console.log(`hey there, ${firstName}`)
// }
// greet("george", "clooney") // output will be order first, second
// function greet(firstName, lastName) { // can define functions that accept >1 parameter 
//     console.log(`hey there, ${firstName}  ${lastName[0]}.`)
// }
// greet("george", "clooney") // output will "hey there, george  c"
// function repeat(str, numTimes) {
//     let result = "";
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }
// EXAMPLE "repeat("Richard is getting to know JS", 20)" will print out "Richard is getting to know JS" x 20
// function isSnakeEyes(a,b) {
//     if (a === 1 && b===1) {
//     console.log('Snake Eyes!');
//    } else {
//         console.log('Not Snake Eyes!');
// }}
// THE RETURN KEYWORD - builts in methods reutnr values when we call them. We cna store those values
// const yell = "I will shout".toUpperCase();
// yell; // "I WILL SHOUT"
// const idx = ["a", "b", "c"].indexOf("c");
// idx; // 2
// // something we can save and use later
// function add(x,y) {
//     console.log(x + y)
// }
// add(7,8) // prints 15 to the console. But we cant use that later.
// function add(x, y) {
//     let sum =x + y;
//     return sum;
//  }
// can now create a variable, exmaple const sum = add(9,4) and will retun 13
// the return runs no matter what.
// it also ends the function.
//  function multiply(x, y) { 
//     return x * y;
//  }
//  multiply(2,3);
//  multiply(9,9);
//  multiply(5,4);
// code above accepts two numerical arguments and returns their value
// function isShortsWeather(temperature) {
//     return temperature >= 75 ? true : false;
// }
// isShortsWeather(100) // returns true
// isShortsWeather(50) // returns false
// function lastElement(x) {
//     if (x.length > 0) {      
//         return x[x.length - 1]
//     }
//     else return null;
// }
// lastElement([4,5,7]) // will return 7
//accept a string argument and return a new string with the first letter capitalized and the rest unchanged
// need to make a new string and return
// function capitalize(string) {
//     let newString = string[0].toUpperCase();
//     string = string.slice(1);
//     return newString + string;
// }
// capitalize("richard"); // will return "Richard"
// function sumArray (arg) {
//     let sum = 0;
//     for (let i = 0; i < arg.length; i++){
//         sum += arg[i];
//     }
//     return sum;
// }
// //sumArray([1,2,3,4]); will output 10
// Days of the week


function returnDay(num) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let i = 0; i <= days.length; i++) {
        if (num < 1 || num > 7) { return null; }
        else {
            return days[num - 1];
        }
    }
}
