// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 11/15/21

//create a function sortingHat() that takes a string as an argument: function sortingHat(str)
function sortingHat(str) {
  //counts the letters in str and assigns it to a variable length
  var len = str.length;
  //uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var mod =  len % 4;
  //create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {
    return "Beyblade";
  }
  else if (mod == 1) {
    return "Yugioh";
  }
  else if (mod == 2) {
    return "Bakugan";
  }
  else if (mod == 3) {
    return "Pokemon";
  }
}


var myButton = document.getElementById("my-button")

//Create an click listener attached to #button
myButton.addEventListener("click", function(){
  //that gets the value of #input and assigns it to a variable name
  var name = document.getElementById("input").value;
  // runs sortingHat(name) and stores the result in a variable game
  var game = sortingHat(name);
  //appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  var text = "<p> You should play my childhood game: "+ game +"</p>";
  document.getElementById("output").innerHTML = text;


})
