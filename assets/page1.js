//seclcting HTML elements with Javascript
document.querySelector("h1").innerHTML = "Richard";
document.firstElementChild.lastElementChild.firstElementChild;
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = "Good Bye";

document.querySelector("input").click();

heading.style.color = "blue";

document.getElementsByTagName("li")[2].style.color = "red";
document.getElementsByClassName("btn")[0].style.color = "orange";
document.getElementById("title").innerHTML = "Hello Again from JS";
document.querySelector("#title") // just like ID selector in css
document.querySelector(".btn") // just like class selector in css
document.querySelector("li a") // combine selectors, specific
document.querySelector("li.item") // combining selector, no spaces because located on the same level element 
document.querySelector("#list a") // anchor tag that is inside somehting with id of list, grandchild
document.querySelector("#list .item") // displays and returns the FIRST item in the document that satisfies the selector
document.querySelectorAll(".item") // querySelectorAll we get back a list of all 3 list items, specify index because its an Array
document.querySelector("#list a").style.color = "red";  // change color of Google link to red

document.querySelector("h1").style.fontSize = "3rem"; // property is camelcase in javascript versus font-size in css. The values have to be represented as strings.

document.querySelector("button").style.backgroundColor = "yellow"; // change background color of button to yellow
document.querySelector("button").style.color = "red"; // change text color to red

document.querySelector("h2").classList.add("huge"); // Seperations of concerns,  added class to css, then styled in a single line of JS. Style in JS and bheavious in JS