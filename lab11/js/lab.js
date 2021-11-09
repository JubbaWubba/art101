// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/27/21

 $("#Challenge").append("<button id = 'button-b'> Press Me :D </button>");
 $("#Prolems").append("<button id = 'button-p'> Press Me :D </button>");
 $("#Results").append("<button id = 'button-r'> Press Me :D </button>");

//Add a click event to each button
$("#button-b").click(function(){
  		//Find the challenge, problems, or results section the button is in
      //Toggle a class special within the <div> of the section
      $(this).parent().toggleClass("special");
      console.log("hi")
	});


$("#button-p").click(function(){
    //Find the challenge, problems, or results section the button is in
    //Toggle a class special within the <div> of the section
    $(this).parent().toggleClass("special");
    console.log("hi")
  });

$("#button-r").click(function(){
  //Find the challenge, problems, or results section the button is in
  //Toggle a class special within the <div> of the section
  $(this).parent().toggleClass("special");
  console.log("hi")
  });
