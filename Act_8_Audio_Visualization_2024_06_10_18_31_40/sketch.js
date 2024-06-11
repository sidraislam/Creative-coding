var mySound, fft;
var volumeSlider;

function preload() {
  mySound = loadSound('float.mp3');
}

function setup() {
  createCanvas(500, 400);
  background(0);
  
  fft = new p5.FFT();
  
  // Creating a volume slider
  volumeSlider = createSlider(0, 2, 0.3, 0.02);
  volumeSlider.position(10, height + 20);
  
  // Setting initial volume
  mySound.setVolume(volumeSlider.value());
  
  // Playing and looping the sound
  mySound.play();
  mySound.loop();
}

function draw() {
  background(255);
  
  // Updating volume based on slider value
  mySound.setVolume(volumeSlider.value());
  
  var spectrum = fft.analyze();
  noStroke();
  fill(0, 255, 0);
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height - h, width / spectrum.length, h);
  }
  
  var waveform = fft.waveform();
  noFill();
  stroke(255, 0, 0);
  strokeWeight(3);
  beginShape();
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
}
