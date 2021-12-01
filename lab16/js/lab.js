// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 12/1/21

var number =0;

var earl = "https://xkcd.com/info." + number + ".json";
// Add a click event to the button
$("#my-button").click(function(){
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
  $.ajax({
      url: earl,
      type: "GET",
  })
  // Put the output of the AJAX call in the output div
  .done(function(comicObj) {
      $("#output").html("<h1 id = stuff>" + comicObj.title + "<h2>");
      $("#output").append("<img src ='" + comicObj.img + "'width='350'>");

  })
});
