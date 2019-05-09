//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

var diam = 30; // diamater
var color1 = 150; // in RGB color represents R
var color2 = 200; // in RGB color represents G
var color3 = 100; // in RGB color represents B
var move1 = 75; // x position
var move2 = 75; // y position

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(5); // border's thickness
  fill(color1,color2,color3,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(move1,move2,diam,diam); // center of canvas, 20px dia
  stroke("#ffffff") // an RGB color for the circle's border
  strokeWeight(1); // border's thickness
  textSize(20); //text's size
  textFont("Courier"); //text's font is Courier
  textStyle(BOLD); // style of teh text is bold
  textAlign(CENTER); // text is centered
  text("Press the mouse to move the circle.",250,40); // text and its position
  fill("#0b5835"); // the circle that follows the mouse's color
  ellipse(mouseX,mouseY,20,20); // follows the mouse, and it is a circle
}

//The mousePressed function happens every time when mouse has pressed
function mousePressed() {
	if (color1 > 250) {  //If color1 more than 250, it will reseted
		color1 = 0;
	} 
	else {				 // Else it will increase by 10 every time
		color1 += 10;
	}

	if (color2 > 250) {  //If color2 more than 250, it will reseted
		color2 = 0;
	} 
	else {
		color2 += 10;	// Else it will increase by 10 every time
	}

	if (color3 > 250) {  //If color3 more than 250, it will reseted
		color3 = 0;
	} 
	else {
		color3 += 10;	// Else it will increase by 10 every time
	}

	if(move2 == 450 && move1 == 450) { // If the circle is at the end of the page it will start from the beginnig and its diamater will be 30
		move1 = 75;
		move2 = 75;
		diam = 30;
	}

	else if (move1 == 450) {  // If the circle's x value equal to 450, it will go to next line with increasing the diamater by 10
		move1 = 75;
		move2 += 75;
		diam  += 10;
	}
	else {           // It will just move 75 px to the right
		move1 += 75;
	}
}