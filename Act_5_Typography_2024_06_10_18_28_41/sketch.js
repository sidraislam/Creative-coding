let font;

function preload() {
  font = loadFont('Pacifico.ttf'); // Load a cursive font
}

function setup() {
  createCanvas(800, 400);
  textFont(font); // Set the loaded font
  textAlign(CENTER, CENTER); // Set text alignment to center
  
}

function draw() {
  background(0); // Set background color to black

  // Calculate dynamic text size
  let textSizeDynamic = map(sin(frameCount * 0.07), -1, 1, 30, 50);
  textSize(textSizeDynamic); // Set text size

  // Calculate dynamic color
  let r = map(sin(frameCount * 0.05), -1, 1, 255, 100);
  let g = map(cos(frameCount * 0.04), -1, 1, 200, 50);
  let b = map(sin(frameCount * 0.03), -1, 1, 150, 255);
  fill(r, g, b); // Set text color

  // Calculate dynamic position based on mouse position
  let x = width / 2 + sin(frameCount * mouseX / width * 0.10) * 10;
  let y = height / 2 + cos(frameCount * mouseY / height * 0.10) * 15;

  // Add a shadow effect
  fill(0, 100); // Set shadow color
  text(
    "“Life is short, make it sweet.”",
    x + 4, // Shift text by 4 pixels in x-direction for shadow effect
    y + 4
  ); // Draw shadow
  fill(r, g, b); // Reset fill to the dynamic color
  text(
    "“Life is short, make it sweet.”",
    x,
    y
  ); // Draw text
}
