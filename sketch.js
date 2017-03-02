function setup() {
  resizeCanvas(500, 500);
  background(0);
  drawStars();
}

function drawPlanet(x, y, radius) {
  
  ellipse (x,y, radius);
  stroke(random(255), random(255), random(255), random(100));
  strokeWeight(2);
  noFill();
}

function drawRings(x, y, w, h) {
  ellipse (x,y,w,h);
  var c = color(random(255), random(255), random(255));
  fill(c); 
  noStroke();
  
}

function drawStars() {
  stroke(255);
  for(var i = 0; i < 100; i++) {
    point(random(width), random(height));
  }
}
  


function mouseClicked(){
  drawPlanet(mouseX, mouseY, random(60));
  drawRings(mouseX, mouseY, random (150), random (150));
}

function keyPressed() {
  if(keyCode == UP_ARROW) 
  drawStars();
}
  
