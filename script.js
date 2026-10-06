let eyeWidth = 50;
let eyeHeight = 27;
let pupilWidth = 22;
let pupilHeight = 25;
let hairColor = '#FDE8A8';

function setup() {
  //sets the screen size
  let canvas = createCanvas(400,400); 
  canvas.style('display', 'block');

  //sets the background color
  background("#F7F4EF"); 
}

function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  
  // Top Hair
  fill(hairColor)
  arc(200, 150, 185, 120, 180, 360);

  // Face
  fill("#FFF0E5");
  stroke("#5A4033");
  strokeWeight(2);
  ellipse(width/2, height/2, 175, 200);

  // Bangs
  fill(hairColor);
  noStroke();
  arc(165, 105, 85, 70, -20, 160);
  arc(235, 105, 85, 70, 20, 200);

  // Longer Hair
  fill(hairColor);
  noStroke();
  rect(119, 225, 36, 200);
  rect(279, 225, 36, 200);

  // Top Hair
  fill(hairColor)
  arc(200, 128, 195, 120, 180, 360);

  // Flower Petals
  fill("FFFFFF");
  stroke("#5A4033");
  ellipse(135, 120, 20, 12);
  ellipse(125, 130, 12, 20);
  ellipse(145, 130, 12, 20);
  ellipse(135, 140, 20, 12);

  // Flower Center
  fill("#E28C32");
  ellipse(135, 130, 11, 11);

  if (mouseIsPressed) {
    // Eyes closed
    fill("#5A4033");
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    ellipse(230, 170, eyeWidth, eyeHeight/8);

    // Mouth open
    fill("#ea9999ff");
    stroke("#5A4033");
    arc(200, 230, 50, 50, 0, 180);
  }
  else {
    // Eyes open
    fill("FFFFFF");
    stroke("#5A4033");
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);

    // Pupils
    fill("#E28C32");
    stroke("#5A4033");
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);

    // Mouth closed
    noFill();
    stroke("#5A4033");
    arc(200, 230, 50, 50, 30, 150);
  }

  // Nose
  stroke("#5A4033");
  strokeWeight(2);
  line(200, 202, 198, 210);

  // Soft Blush
  noStroke();
  fill(252, 174, 174, 120);
  ellipse(150, 200, 25, 12);
  ellipse(250, 200, 25, 12);
  
  // Text
  fill("black");
  noStroke();
  textSize(15);
  text("Home is wherever we are together.", 20, 20);

  textSize(12);
  text("- Lumine from Genshin Impact", 20, 40);

  // Directions
  fill("black");
  noStroke();
  textSize(15);
  text("Click to see me \nblink and smile.", 260, 360);
}