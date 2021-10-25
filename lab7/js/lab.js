// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/25/21
function username (); {
  // Window Prompt Popup, get name
  var name = window.prompt("Hello, What is your name?");
  console.log("name =", name);
  // Name into an array
  var userarray = name.split('');
  console.log("Array =", userarray);
  //Sort the array
  var userarraysorted = userarray.sort();
  console.log("Sorted Array =", userarraysorted);
  //join
  var newname = userarraysorted.join('');
  console.log("new name =", newname);

  return newname;
}


document.writeln("Your name is now: ", username(), "</br>");
