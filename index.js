let level = 0;

// button colors
let buttonColors = ["red", "green", "blue", "yellow"];
let gamePattern = [];
let randomChosenColor = buttonColors[nextSequence()[0]]
gamePattern.push(randomChosenColor)
// console.log(nextSequence())
// console.log("Random color selected is: " + randomChosenColor)
console.log("Game has chosen the color: " + gamePattern)
// console.log("Random color selected is: " + buttonColors[gamePattern]);


// $(".btn").each((e) => {
//   // colorArray.push($(e).attr("id"));
//   // console.log(e)
// });

$("h1").text("Level: " + level);

$("body").keypress((e) => {
  console.log(e.key);
});

$(".btn").click(colorClicked);

function colorClicked(e) {
  let className = e.currentTarget.classList[1];
  // Tells us what color box is clicked
  console.log(className + " was clicked");
}

// function
function nextSequence() {
  let randomNumber = [];

  // random number generator
  let randomNum = Math.floor(Math.random() * 4);
  randomNumber.push(randomNum);
  // console.log("Random number is: " + randomNumber);
  // console.log(randomNumber[0])
  return randomNumber
}


nextSequence();
