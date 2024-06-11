function setup() {
  createCanvas(400, 500);
}

function draw() {
  background("#AFEEEE	");
  
   // Alien antennas
    stroke(100, 150, 200);
    strokeWeight(9);
    line(150, 110, 132, 42);
    line(250, 110, 272, 42);
  
  //Alien Ears
   stroke(1)
  fill("#00FF7F");
  ellipse(100, 200, 60, 80);
  ellipse(295, 200, 60, 80);
    
  // Alien body
  fill("#00FF7F	");
  stroke(3);
  ellipse(200, 200, 170, 250);
  
  // Alien eyes
  fill("#FFFFFF	");
  stroke(1);
  ellipse(165, 150, 70, 90);
  ellipse(240, 150, 70, 90);

  // Alien pupils
  fill(0);
  ellipse(165, 151, 30, 50);
  ellipse(239, 151, 30, 50);

  
  // Alien mouth
  noFill(0);
  stroke(3);
  strokeWeight(7);
  arc(200, 240, 100, 50, 0, PI);

 
  
  
    

}