var rows = 10;
var cols = 10;
var distanceX = 40;
var distanceY = 40;
var shapes = [];

var palette = ["#3F51B5", "#ee5873", "#EE3006"];

function setup() {
  createCanvas(400, 400);
  // Automatically trigger the mousePressed function to draw the grid
  mousePressed();
}

function mousePressed() {
  background(0);
  noStroke();
  colorMode(HSB);
  
  // Initialize shapes array with random colors
  for (var r = 1; r < rows; r++) {
    shapes[r] = [];
    for (var c = 1; c < cols; c++) {
      var randomColor = color(random(255), 255, 255);
      shapes[r][c] = {
        x: c * distanceX,
        y: r * distanceY,
        size: random(30, 30),
        color: randomColor,
        shapeType: floor(random(2)) // 0 for triangle, 1 for square
      };
      fill(randomColor);
      if (shapes[r][c].shapeType === 0) {
        drawTriangle(shapes[r][c].x, shapes[r][c].y, shapes[r][c].size);
      } else {
        drawSquare(shapes[r][c].x, shapes[r][c].y, shapes[r][c].size);
      }
    }
  }
}

function mouseClicked() {
  // Check which shape was clicked and change its color
  for (var r = 1; r < rows; r++) {
    for (var c = 1; c < cols; c++) {
      var d = dist(mouseX, mouseY, shapes[r][c].x, shapes[r][c].y);
      if (d < shapes[r][c].size / 2) {
        currentColor = color(random(255), 255, 255);
        shapes[r][c].color = currentColor;
        fill(currentColor);
        if (shapes[r][c].shapeType === 0) {
          drawTriangle(shapes[r][c].x, shapes[r][c].y, shapes[r][c].size);
        } else {
          drawSquare(shapes[r][c].x, shapes[r][c].y, shapes[r][c].size);
        }
      }
    }
  }
}

function drawTriangle(x, y, size) {
  var h = size * sqrt(3) / 2;
  triangle(x - size / 2, y + h / 2, x + size / 2, y + h / 2, x, y - h / 2);
}

function drawSquare(x, y, size) {
  rectMode(CENTER);
  rect(x, y, size, size);
}

