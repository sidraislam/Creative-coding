
var img, x, y;

function preload() {

img = loadImage("mountain.jpg");

}



function setup() {

createCanvas (500, 470);

background(0);

noStroke();

}



function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 0, 0);

var c = get(x, y);

fill(c);

rect(x, y, 70, 70);

}