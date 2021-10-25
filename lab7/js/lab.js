// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/25/21
var name = window.prompt("Hello, What is your name?");
console.log("name =", name);

function username (name) {

  // Name into an array, called userarray
  var userarray = name.split('');
  console.log("Array =", userarray);
  //Sort the array, userarray gets turned into userarraysorted
  var userarraysorted = userarray.sort();
  console.log("Sorted Array =", userarraysorted);
  //join, userarraysorted gets turned into newname
  var newname = userarraysorted.join('');
  console.log("new name =", newname);

  return newname;
}

//Output
function output () {
  document.writeln("Your name was: ", name, "</br>");
  document.writeln("Your name is now: ", username(name), "</br>");
}

output();
