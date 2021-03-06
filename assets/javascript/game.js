var gameStart = {
    targetNumber: Math.floor(Math.random() * 119) + 1,
    wins: 0,
    losses: 0,
};

var targetNumber = gameStart.targetNumber;

var newTargetNumber = gameStart.targetNumber;

$("#number-to-guess").text(targetNumber);

var counter = 0;


// Ideally this should create a range function and into which I can feed the length of the array and it can generate a random image out of the images array.

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,]

function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

console.log(shuffle(numbers))

var images = ["assets/images/crystalOne.jpg","assets/images/crystalTwo.jpg","assets/images/crystalThree.jpg","assets/images/crystalFour.jpg"];
var randomImage = Math.floor(Math.random()*images.length);

for (i=0;i<images.length;i++){
  numbers[i] = shuffle(numbers[i])
}




// Creates a random array of numbers out of four in order to generate a random image.
// for (i=0;i<images.length;i++){
  // empty.push(shuffle(images[i]);
// }

// Creates random images out of the list.
$(".button").on("click", function(){
  $(imageCrystal).removeClass("crystal-image")
  
  for (var i = 0; i < images.length; i++){

  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image")

  // Each imageCrystal will be given a random src link from the images Array.
  
  imageCrystal.attr("src", shuffle(images[i]));

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", numbers[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
  }

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

  var crystalValue = $(this).attr("data-crystalvalue")
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  alert("New score: " + counter);

  if (counter === targetNumber){
    alert("You win!");
    counter = 0;
    gameStart.wins++;
    $("#crystals").html("<h2>Wins: "+ gameStart.wins + "</h2>");
    $("#crystals").remove(imageCrystal);
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
    counter = 0;
    gameStart.losses++;
    $("#crystals").html("<h2>Losses: "+ gameStart.losses + "</h2>");
    $("#crystals").remove(imageCrystal);
    }
  });
});