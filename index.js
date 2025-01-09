let level = 0;

let colorArray = [];
$(".btn").each(() => {
  colorArray.push($(".btn").attr("id"));
  console.log(colorArray);
});

$("h1").text("Level: " + level);

$("body").keypress((e) => {
  console.log(e.key);
});

$(".btn").click(() => {
  console.log("clicked");
});
