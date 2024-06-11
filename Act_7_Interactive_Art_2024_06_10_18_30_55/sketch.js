// Arrays defined to store particles
let particles = [];
let numParticles = 300;
let noiseScale = 500;
let offsetX, offsetY;

function preload() {
  //archivo = loadFont('https://openprocessing-usercontent.s3.amazonaws.com/files/user155351/visual713748/h6c25320663af8a43c41d157e1dec3650/ArchivoNarrow-Bold.otf');
  archivo = loadFont('Pacifico.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  offsetX = random(900);
  offsetY = random(900);
  


  // Create particles
  for (let i = 0; i < numParticles; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  //Background color
  background(0);
  
  // Update and display particles
  for (let i = 0; i < numParticles; i++) {
    particles[i].move();
    particles[i].display();
  }
  
  // Text Display
  fill(255);
  textSize(70);
  textFont(archivo);
  textAlign(CENTER, CENTER);
  text("Bath Spa University", width / 2, height / 3);

  // Update and display particles
  for (let i = 0; i < numParticles; i++) {
    particles[i].move();
    particles[i].display();
  }
}

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  
  this.move = function() {
    // Update particle position based on Perlin noise
    let angleX = noise((this.pos.x + offsetX) / noiseScale, this.pos.y / noiseScale) * TWO_PI;
    let angleY = noise(this.pos.x / noiseScale, (this.pos.y + offsetY) / noiseScale) * TWO_PI;
    this.vel.set(cos(angleX), sin(angleY));
    this.pos.add(this.vel);
    
    // Wrap around edges
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = height;
    if (this.pos.y > height) this.pos.y = 0;
  };
  
  this.display = function() {
    // Draw particles
    noStroke();
    let r = map(this.pos.x, 0, width, 2, 255);
    let g = map(this.pos.y, 0, height, 2, 255);
    let b = 255 - (r + g) / 2;
    fill(r, g, b);
    rect(this.pos.x, this.pos.y, 10, 10);
  };
}

function mouseMoved() {
  // Update noiseScale based on mouse position
  noiseScale = map(mouseX, 0, width, 200, 800);
  offsetX = map(mouseY, 0, height, 0, 2000);
  offsetY = map(mouseY, 0, height, 0, 2000);
}
