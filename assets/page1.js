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

