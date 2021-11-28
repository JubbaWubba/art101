// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 11/27/21

var earl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&format=txt"
// Add a click event to the button
$("#my-button").click(function(){
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
  $.ajax({
      url: earl,
      type: "GET",
  })
  // Put the output of the AJAX call in the output div
  .done(function(data) {
      $("#output").html(data);
  })
});
