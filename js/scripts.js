$(document).ready(function(){
  $('button').click(function(){
    var userInput = $('input').val();
    console.log(typeof userInput);
    $('p').empty();
    $('#output').append(buildArray(userInput));
  })
})

//buildArray() takes a userInput and builds an array of that length
//It also substitues certain number strings for test strings
function buildArray(number) {
  var originArray = [];

  for (i = 0; i <= number; i++){
    if(i.toString().indexOf("3") != -1) {
      originArray.push("I'm sorry, Dave. I can't do that.");
    }
    else if (i.toString().indexOf("2") != -1){
      originArray.push(" boop! ");
    }
    else if (i.toString().indexOf("1") != -1) {
      originArray.push(" beep! ");
    }
    else {
      originArray.push(" " + i + " ");
    }
  }
  return originArray;
}
