// Array defined to store positions of mouse trail rectangles
let trail = [];
let trailColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(90);
  trailColor = color(random(255), random(255), random(255)); // Random initial color
}

function draw() {
  background(153, 10); // Transparent white background

  // Draw the mouse trail
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 255, 0); // Gradually decrease transparency
    fill(trailColor.levels[0], trailColor.levels[1], trailColor.levels[2], transparency); // Color with transparency
    let size = map(i, 0, trail.length, 50, 10); // Gradually decrease size
    rect(trail[i].x, trail[i].y, size, size); // Draw rectangle at each position
  }
}

function mouseMoved() {
  // Add current mouse position to the trail
  let newPos = createVector(mouseX, mouseY);
  trail.push(newPos);

  // Limit the trail length
  if (trail.length > 50) {
    trail.splice(0, 2); // Remove the oldest position
  }

  // Change trail color based on mouse position
  trailColor = color(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 200);
}

function mouseClicked() {
  // Clear the trail when mouse is clicked
  trail = [];
}
