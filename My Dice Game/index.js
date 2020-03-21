//break down the problem. we want the images to change every time we refresh the page which js allows us to do.
//so we want the source image to change every time its refreshed. which means we have to get the string of images to change
//as we go along.



// 1-6 start off by creating a random number between 1-6 as the dice images are labelled 1-6*//
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Create a variable so the file image is created e.g. dice1.png*//
var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice 1-6

var randomImageSource = "Diceimages/" + randomDiceImage; //Diceimages/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "Diceimages/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if (randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}
else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
