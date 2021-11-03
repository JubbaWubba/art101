// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/27/21

//Borrow the nameSort() function or my anagram() function from Lab 7.
function username (name) {

  // Name into an array, called userarray
  var userarray = name.split('');
  //Sort the array, userarray gets turned into userarraysorted
  var userarraysorted = userarray.sort();
  //join, userarraysorted gets turned into newname
  var newname = userarraysorted.join('');

  return newname;
}

var buttonEl = document.getElementById("my-button");
//Attach an event listener to your button that does the following:
function buttonpush() {
  //Gets the value of your input field
  var origin_name = document.getElementById("user-name");
  var inputed_name = origin_name.value;
  //Runs that value through your sort() or anagram() function and saves the results.

  var sortedname = username(inputed_name);
  //Replaces the html in <div id=output> with the results.


  var outputEl = document.getElementById("output");
  outputEl.innerHTML = "New Name: "+ sortedname;
}

buttonEl = document.addEventListener("click", buttonpush);
