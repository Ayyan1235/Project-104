// generation of random value
var guess = 1;
var y = Math.floor(Math.random()* 10 + 1);
console.log(y);
// count of attempts
 player_name = localStorage.getItem("player_name");

// until hit
function submit()
{
  var x = document.getElementById("guessField").value;
  if(x == y)
  {
    alert("CONGRATULATIONS!!! "+ player_name + "  YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
    guess = 1;
  }
  else if(x > y)
  {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  }
  else
  {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
// function for the number sent by the user
}

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}