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


function greet(firstName, lastName) { // can define functions that accept >1 parameter 
    console.log(`hey there, ${firstName}  ${lastName[0]}.`)
}

greet("george", "clooney") // output will "hey there, george  c"