let click = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(215, 215, 210);
  translate(width / 2, height / 2);
  click *= 0.9;
  rot = sin(frameCount * 0.0002) * 0.01;
  push();
  rotate(rot);
  drawWaves();
  pop();

  push();
  rotate(rot);
  scale(1, -1); //mirrors the lines
  drawWaves();
  pop();
}

function drawWaves(){
  let rows = 10;
  let interactY = mouseY*0.00007;
  let interactX = mouseX*0.00003;
  for (let j = 0; j < rows; j++) {
    beginShape();
    let yOff = j * 10;
    stroke(255 - j * 2, 255 - j, 250 - j, 80);
    for (let x = -width; x < width; x += 10) {
      let n = noise(x * 0.002+interactX, j * 0.1+interactY, frameCount * 0.002);
      let y = map(n, 0, 1, -height, height); 
      let w = y - yOff + sin(frameCount * 0.01 + j) * 10;
      let pulseY = w * (1 + click * 10);
      let pulseX = x * (1 + click * 10);
      vertex(pulseX, pulseY);
    }
    endShape();
  }
}
function mousePressed() {
  if (event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
    click = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

