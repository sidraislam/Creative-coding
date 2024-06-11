var table;
var workingHours = [];
var days = [];
var colors = [
  "#CC3544", 
  "#80FF00", 
  "#FF0000", 
  "#FF3399", 
  "#3D7A99", 
];

// Acquiring Data from a CSV file
function preload() {
  table = loadTable("workhours.csv", "csv", "header");
}

// Filtering data
function setup() {
  createCanvas(700, 400);
  days = table.getColumn("Days");
  workingHours = table.getColumn("Working Hours");
}

function draw() {
  background(0);
  
  // Centering text "Hours Spent at Work"
  textAlign(CENTER, CENTER);
  textSize(30);
  fill(255);
  text("Hours Spent at Work", width / 2, height / 8);

  // Centering the pie chart
  translate(width / 2, height / 2+50);

  // Representation - draw pie chart based on hours spent at work each day
  let totalHours = workingHours.reduce((a, b) => a + Number(b), 0);
  let startAngle = 0;
  for (let i = 0; i < workingHours.length; i++) {
    let angle = map(workingHours[i], 0, totalHours, 0, TWO_PI);
    fill(colors[i % colors.length]);
    arc(0, 0, 200, 200, startAngle, startAngle + angle);
    startAngle += angle;

    // Interaction - reveal number of hours alongside sectors
    if (mouseY > height / 2 - 100 && dist(0, 0, mouseX - width / 2, mouseY - height / 2) < 100) {
      fill(255);
      textSize(14);
      let sectorAngle = startAngle - angle / 2;
      let x = cos(sectorAngle) * 100;
      let y = sin(sectorAngle) * 100;
      text(workingHours[i], x, y);
    }

    // Days label
    fill(255);
    textSize(15);
    textAlign(CENTER);
    let midAngle = startAngle - angle / 2;
    let xLabel = cos(midAngle) * 150;
    let yLabel = sin(midAngle) * 150;
    text(days[i], xLabel, yLabel);
  }
}
