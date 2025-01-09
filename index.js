let level = 0;

let buttonColors = ["red", "green", "blue", "yellow"];
let randomChosenColor = nextSequence();


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
  console.log(className + " was clicked");
}

function nextSequence() {
  let randomNumber = [];
  let randomNum = Math.floor(Math.random() * 4);
  randomNumber.push(randomNum);
  console.log(randomNumber);
}

nextSequence();
