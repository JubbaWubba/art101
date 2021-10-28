// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 10/27/21

//Array1 and array 2, same array
array1 = [1,10,20,30,40,50,60,70,80,100];
array2 = [1,10,20,30,40,50,60,70,80,100];

//multiply 5 function
function times5(x) {
  return (x * 5)
};

//function that multiplies the 5 array by 2 and adds 10
function times2(x) {
  return ((times5(x) * 2)+10)
};

//function that subtracts 30 from the array
function minus30(x) {
  return (times2(x) - 30)
};


// array multiplied by 5
var times10 = array1.map(times2);
var time5 = array1.map(times5);
var m30 = array1.map(minus30);
// array that was multiplied by 5 then by 2

// array that was divided by 10 from the last two

//function that returns array 2, x + 1000/2
var equation = array1.map(function(x) {
   return ((x + 1000)/2)}
 );


console.log("this is the initial array: ", array1)
console.log("this is the array times 5 array: ", time5)
console.log("this is array multiplied the prior array by 2 and adds 10: ", times10)
console.log("this is the array subtracted 30 from the prior array: ", m30)
console.log("This array used an anon function to return the intial array +1000 and halved: ", equation)


console.log("this is the initial array: ", times10)
