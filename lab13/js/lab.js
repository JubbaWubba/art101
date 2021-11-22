// *
// *
// *
// **Author: Gabriel Rivera
// // Created: 11/22/21


// Create a "FizzBuzz" function similar to how we did in class.

function fizzbuzz () {
  // Loop through numbers 1 to 200, listing them as you go
  outputstr = ""
  for (var num = 1; num < 201; num++) {
    outputstr += num + ":";
    // If the number is a multiple of 3, if should print "Fizz!"
    if (num % 3 === 0 && !(num % 5 === 0) && !(num % 7 === 0)) {
      outputstr +=  " Fizz!";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if (num % 5 === 0 && !(num % 3 === 0) && !(num % 7 === 0)) {
      outputstr += " Buzz!";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if (num % 7 === 0 && !(num % 5 === 0) && !(num % 3 === 0)) {
      outputstr +=  " Boom!";
    }


    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (num % 3 === 0 && (num % 5 === 0) && !(num % 7 === 0)) {
      outputstr +=  " FizzBuzz!";
      }
    if (num % 3 === 0 && (num % 7 === 0) && !(num % 5 === 0)) {
        outputstr +=  " FizzBoom!";
        }
    if (num % 5 === 0 && (num % 7 === 0) && !(num % 3 === 0)) {
            outputstr +=  " BuzzBoom!";
        }
    if (num % 5 === 0 && (num % 7 === 0) && (num % 3 === 0)) {
                outputstr += + " FizzBuzzBoom!";
        }
    outputstr += "<br>"
    $("#output").html(outputstr);

  }







}
fizzbuzz()
