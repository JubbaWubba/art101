// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/27/21


//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

//Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

//Change the html attribute of new1El to say something new.
new1El = "Something new";
console.log(new1El);

//Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

//Change the html attribute of new2El to say something else.
new2El = "something else";

//Append both new elements one at a time using appendChild() to your output <div>

var append1 = document.createTextNode(new1El); // make the new1El appendable
var append2 = document.createTextNode(new2El); // make the 2nd element apparenable
console.log(append1);
outputEl.appendChild(append1); // appends first variable
outputEl.appendChild(append2); // appends 2nd variable

//Change the css attributes of at least two elements of your page

var challenge_el = document.getElementById("Challenge"); // Get the challenge id
challenge_el.style.color ="black"; // changes the text to black

var problem_elm = document.getElementById("Prolems"); // Get the problem id
problem_elm.style.backgroundColor ="black"; //changes the background color to black
