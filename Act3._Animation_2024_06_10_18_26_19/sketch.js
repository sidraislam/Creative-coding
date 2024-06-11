var numFrames = 6;

var frame = 0

var images = new Array(numFrames);



function preload() {

    images[0] = loadImage("bird 1.png");

    images[1] = loadImage("bird 2.png");

    images[2] = loadImage("bird 3.png");

    images[3] = loadImage("bird 4.png");

    images[4] = loadImage("bird 5.png");

    images[5] = loadImage("bird 6.png");

}

function setup() {

    createCanvas(600, 400);

    frameRate(14);

    background(255);

}



function draw() {

background(255);

frame++;

if (frame == numFrames) frame = 0;

image(images[frame], mouseX - 85, mouseY - 90);

}
