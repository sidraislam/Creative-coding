function setup() {
  createCanvas(600, 400);

  // Background
  background("#87CEEB"); // Sky

  // Road
  fill("	#A9A9A9"); // Gray color for road
  noStroke();
  rect(0, 250, width, height - 250); // Draw road

  // Trees
  fill("#8B4513"); // Brown color for tree trunk
  rect(50, 180, 20, 70); // Tree trunk
  fill("#006400"); // Green color for tree leaves
  ellipse(60, 150, 80, 80); // Tree leaves

  fill("#8B4513"); // Brown color for tree trunk
  rect(550, 180, 20, 70); // Tree trunk
  fill("#006400"); // Green color for tree leaves
  ellipse(560, 160, 80, 80); // Tree leaves

  // Car
  fill("#20B2AA"); // Body color
  stroke(0); // Black stroke
  strokeWeight(2); // Medium stroke weight
  rect(150, 200, 300, 50); // Body
  rect(190, 150, 200, 50); // Roof

  fill("#0E0101"); // Black color for wheels
  ellipse(200, 250, 50, 50); // Front wheel
  ellipse(400, 250, 50, 50); // Back wheel

  fill("#0E0101"); // Black color for windows
  rect(340, 160, 30, 25); // Left window
  rect(210, 160, 30, 25); // Right window

  fill("#FF0000"); // Red color for headlights
  ellipse(150, 210, 10, 20); // Left headlight
  fill("#FFD700"); // Gold color for right headlight
  ellipse(450, 210, 10, 20); // Right headlight
}
