let x = 0, y = 0;
let score = 0;
const size = 80;
let targetImg;
let startBtn;
let timerActive = false;
let startTime = 0;
const duration = 15000;
let highScore = 0;
let t = 0;

function preload() {
  targetImg = loadImage('target.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);

  x = random(50, width - 50 - size);
  y = random(150, height - 50 - size);

  startBtn = createButton('Start');
  startBtn.position(width/2 - 45, height - 120);
  startBtn.style('padding', '18px 22px');
  startBtn.style('font-family', 'Comfortaa, sans-serif');
  startBtn.mousePressed(() => {
    score = 0;
    timerActive = true;
    startTime = millis();
  });
}

function draw() {
  let n1 = noise(t);
  let n2 = noise(t + 5);
  let c1 = color(200 + 55 * n1, 180 + 75 * n2, 255 * n1);
  let c2 = color(255 * n2, 200 + 55 * n1, 180 + 75 * n2);
  for (let yy = 0; yy < height; yy++) {
    let inter = map(yy, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, yy, width, yy);
  }
  t += 0.01;

  noStroke();
  fill(0);
  image(targetImg, x, y, size, size);
  textSize(60);
  text(score, width / 2, 80);

  push();
  textAlign(LEFT, TOP);
  textSize(28);
  text('Highscore: ' + highScore, 20, 20);
  pop();

  if (timerActive) {
    const elapsed = millis() - startTime;
    const remaining = max(0, duration - elapsed);
    const secs = (remaining / 1000).toFixed(1);

    textSize(28);
    text('Time: ' + secs + 's', width / 2, 130);

    if (remaining <= 0) {
      timerActive = false;
      highScore = max(highScore, score);
    }
  }
}

function mousePressed() {
  if (timerActive &&
      mouseX >= x && mouseX <= x + size &&
      mouseY >= y && mouseY <= y + size) {
    score++;
    x = random(50, width - 50 - size);
    y = random(150, height - 50 - size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (resetBtn) resetBtn.position(width/2 - 40, height - 30);
  if (startBtn) startBtn.position(width/2 - 40, height - 70);
}