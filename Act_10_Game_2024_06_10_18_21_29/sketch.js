let screen = 0; // Variable to track the current screen (0 = start screen, 1 = gameplay screen, 2 = end screen)
let cannon; // Variable to store the cannon object
let particles = []; // Array to store particle objects
let target; // Variable to store the target object
let score = 0; // Current score
let maxScore = 5; // Maximum score needed to win

function setup() {
  createCanvas(600, 400);
  cannon = new Cannon(width / 2, height - 50); // Create a new cannon object
  target = new Target(width / 2, height / 4); // Create a new target object
}

function draw() {
  if (screen == 0) {
    startScreen(); // Display the start screen
  } else if (screen == 1) {
    gameplayScreen(); // Display the gameplay screen
  } else if (screen == 2) {
    endScreen(); // Display the end screen
  }
}

function startScreen() {
  background(40, 55, 71); // Teal background
  fill(255);
  textAlign(CENTER);
  textSize(34);
  text('Sky Hunter', width / 2, height / 2 - 40); // Title text
  textSize(26);
  text('Click to start', width / 2, height / 2 + 20); // Instruction text
  reset(); // Reset the game state
}

function gameplayScreen() {
  background("#A46CAF"); // Black background
  displayScore(); // Display the current score
  cannon.display(); // Display the cannon
  cannon.update(mouseX); // Update the cannon position based on mouse movement
  target.display(); // Display the target
  
  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Update particle position
    if (particles[i].hitTarget(target)) { // Check if particle hits the target
      score++; // Increase score
      if (score >= maxScore) {
        screen = 2; // Change to end screen if max score is reached
      }
      particles.splice(i, 1); // Remove particle from array
    } else if (particles[i].outOfBounds()) { // Check if particle is out of bounds
      particles.splice(i, 1); // Remove particle from array
    }
  }
}

function endScreen() {
  background(55); // Grey background
  textAlign(CENTER);
  textSize(32);
  fill(255);
  text('GAME OVER', width / 2, height / 2 - 40); // Game over text
  textSize(24);
  text("SCORE: " + score, width / 2, height / 2); // Display final score
  text('Click to play again', width / 2, height / 2 + 40); // Instruction text
}

function mousePressed() {
  if (screen == 0) {
    screen = 1; // Start the game on mouse click
  } else if (screen == 2) {
    screen = 0; // Restart the game on mouse click
  } else {
    cannon.shoot(); // Shoot particles when mouse is clicked
  }
}

function reset() {
  score = 0; // Reset the score
  particles = []; // Clear the particles array
}

function displayScore() {
  fill(255);
  textSize(18);
  text("Score: " + score, 30, 20); // Display current score
}

// Cannon class
class Cannon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 20;
  }
  
  display() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height); // Display cannon
  }
  
  update(newX) {
    this.x = newX;
  }
  
  shoot() {
    particles.push(new Particle(this.x, this.y)); // Create a new particle at cannon position
  }
}

// Particle class
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velY = random(-5, -10); // Random vertical velocity
    this.size = random(5, 10); // Random size
    this.color = color(random(255), random(255), random(255)); // Random color
  }
  
  update() {
    this.y += this.velY; // Update particle position
    fill(this.color);
    ellipse(this.x, this.y, this.size); // Display particle
  }
  
  hitTarget(target) {
    let d = dist(this.x, this.y, target.x, target.y); // Calculate distance between particle and target
    return d < target.radius; // Check if particle hits the target
  }
  
  outOfBounds() {
    return this.y < 0; // Check if particle is out of bounds 
  }
}

// Target class
class Target {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 20; // Target radius
  }
  
  display() {
    fill(128, 128, 128); // Grey color
    rect(this.x, this.y, this.radius * 2); // Display target
  }
}
