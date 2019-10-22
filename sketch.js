//Create array to contain balloons
let balloons = []

let balloon = {
  x: 100,
  y: 100,
  width: 50,
  height: 75,
  color: "green",
  effect: 3,
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  createBalloons()
  drawBalloon( balloons[balloons.length-1] )
}

//Define function to draw one balloon
function drawBalloon(bln) {
  fill(bln.color)
  ellipse(bln.x, bln.y, bln.width, bln.height)
}

function createBalloons() {
  let temp_balloon = {
    x: random(width),
    y: random(height),
    width: 50,
    height: 75,
    color: "red",
    effect: 3
  }
  //Add new balloon to ballons group/array
  balloons.push(temp_balloon)
}
