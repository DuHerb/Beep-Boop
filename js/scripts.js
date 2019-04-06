$(document).ready(function(){
  $('button').click(function(){
    var userInput = $('input').val();

    $('p').empty();

    if (isValid(userInput)) {
      var originArray = buildArray(userInput);
      typeWriter("output", originArray);
    } else {
      var errorArray = ["input must be a number greater than 0"];
      typeWriter("output", errorArray);
    }

    $('input').val('');
  })
})

//validate(input) checks that the user has inputed a positive numbers
function isValid(userInput) {
  if (parseInt(userInput) && parseInt(userInput) > 0){
    return true;
  } else {
    return false;
  }
}

//buildArray() takes a userInput and builds an array of that length
//It also substitues certain number strings for test strings
function buildArray(number) {
  var originArray = [];

  for (q = 0; q <= number; q++){
    if(q.toString().indexOf("3") != -1) {
      originArray.push("I'm sorry, Dave. I can't do that.");
    }
    else if (q.toString().indexOf("2") != -1){
      originArray.push(" boop ");
    }
    else if (q.toString().indexOf("1") != -1) {
      originArray.push(" beep ");
    }
    else {
      originArray.push(" " + q + " ");
    }
  }
  return [originArray.join('')];
}

//typewriter effects
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0;

// Speed (in milliseconds) of typing.
var speedForward = 50, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 0; //Backspace Speed

//Run the loop
function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("p"); //Header element
      // eParagraph = element.children("p");

  if (i < aString.length) {
      eHeader.text(eHeader.text() + aString.charAt(i));
      i++;
      setTimeout(function(){ typeWriter(id, ar); }, speedForward);

    } else if (i == aString.length) {
      i=0;
      a=0;
      return;
    }
}
