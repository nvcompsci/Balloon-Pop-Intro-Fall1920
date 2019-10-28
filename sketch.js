//Create array to contain balloons
let balloons = []
let score = 0

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
  createBalloons()
}

function draw() {
  background(220);
  text("Score: "+score,10,10)
  for (let i = 0; i < 20; i++) {
    if (!balloons[i].alive)
      continue;
    drawBalloon(balloons[i])
    balloons[i].x += random(-2,2)
    balloons[i].y += random(-2,2)
  }
}

//Define function to draw one balloon
function drawBalloon(bln) {
  fill(bln.color)
  ellipse(bln.x, bln.y, bln.width, bln.height)
}

function createBalloons() {
  for (let i = 0; i < 20; i++) {
    let temp_balloon = {
      x: random(width),
      y: random(height),
      width: 25,
      height: 50,
      color: "red",
      effect: 3,
      alive: true
    }
    //Add new balloon to ballons group/array
    balloons.push(temp_balloon)
  }
}

function mouseClicked() {
  for (let i = 0; i < 20; i++) {
    let balloon = balloons[i]
    if (dist(balloon.x, balloon.y,mouseX,mouseY) < balloon.width/2) {
        popBalloon(balloon)
        //alert(i)
    }
  }
}

function popBalloon(balloon) {
    balloon.alive = false
    score += 3
}
