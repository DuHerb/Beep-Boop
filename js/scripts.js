$(document).ready(function(){
  $('button').click(function(){
    var userInput = $('input').val();
    $('h1').empty();
    // console.log(buildArray(userInput));
    // $('#output').append(buildArray(userInput));
    var testArray = buildArray(userInput);
    console.log(testArray.join(""));
    console.log(typeof testArray.join(""));
    var typeArray = [testArray.join("")];

    // typeArray.push(testArray.join(""));
    // console.log(typeArray);
    typeWriter("output", typeArray);
  })
  $('#reset').click(function(){
    window.location.reload();
  })


//buildArray() takes a userInput and builds an array of that length
//It also substitues certain number strings for test strings
function buildArray(number) {
  var originArray = [];

  for (q = 0; q <= number; q++){
    if(q.toString().indexOf("3") != -1) {
      originArray.push("I'm sorry, Dave. I can't do that.");
    }
    else if (q.toString().indexOf("2") != -1){
      originArray.push(" boop! ");
    }
    else if (q.toString().indexOf("1") != -1) {
      originArray.push(" beep! ");
    }
    else {
      originArray.push(" " + q + " ");
    }
  }
  return originArray;
}

//typewriter effects
// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".

// Speed (in milliseconds) of typing.
var speedForward = 50, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 0; //Backspace Speed

//Run the loop


function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element

  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {

    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {

      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);

      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }

    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {

      i=0;
      a=0;
      return;
    }

  // If backspacing is enabled
  }
  // else {

    // If either the header or the paragraph still has text, continue backspacing
    // if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

      // If paragraph still has text, continue erasing, otherwise switch to the header.
      // if (eParagraph.text().length > 0) {
      //   eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      // } else if (eHeader.text().length > 0) {
      //   eParagraph.removeClass("cursor");
      //   eHeader.addClass("cursor");
      //   eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      // }
      // setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);

    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    // } else {

      // isBackspacing = false;
      // i = 0;
      // isParagraph = false;
      // a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      // setTimeout(function(){ typeWriter(id, ar); }, 50);

    }
  // }
// }
})
