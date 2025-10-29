let camera, kind = 0;
let flash = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  camera = createCapture(VIDEO, {flipped: true});
  camera.size(windowWidth, windowHeight);
  camera.hide();
  noStroke();
}

function draw() {
  image(camera, 0, 0, width, height);
  camera.loadPixels();
  loadPixels();

  if (flash) {
    kind = (floor(frameCount * 0.3) % 4) + 1;
  }

  if (kind == 1) {
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
    }
  } 
  else if (kind == 2) { 
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i] = 0;
      pixels[i + 2] = 0;
    }
  } 
  else if (kind == 3) {
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i] = 0;
      pixels[i + 1] = 0;
    }
  } 
  else if (kind == 4) { 
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i+2] = 0;
    }
  }

  updatePixels();
  loadCircles();
}

function loadCircles(){
  fill(color(255,0,0));
  rect(70,70, 70, 70);
  fill(color(0,255,0));
  rect(width-140, height-140, 70, 70)
  fill(color(0,0,255));
  rect(70, height-140, 70, 70);
  fill(color(255,255,0));
  rect(width-140, 70, 70, 70);

  fill(color(255, 0, 255));
  rect(width/2 - 35, height - 90, 70, 70);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(12);
  text('PARTY', width/2, height - 55);
}

function mousePressed(){
  if(mouseX < 140 && mouseX > 70 && mouseY < 140 && mouseY > 70){
    kind = 1;
    flash = false;
  }
  else if (mouseX > width - 140 && mouseX < width - 70 && mouseY > height - 140 && mouseY < height - 70){
    kind = 2;
    flash = false;
  } 
  else if (mouseX > 70 && mouseX < 140 && mouseY > height - 140 && mouseY < height - 70){
    kind = 3;
    flash = false;
  } 
  else if (mouseX > width - 140 && mouseX < width - 70 && mouseY > 70 && mouseY < 140){
    kind = 4;
    flash = false;
  }
  else if (mouseX > width/2 - 35 && mouseX < width/2 + 35 && mouseY > height - 90 && mouseY < height - 20) {
    flash = true;
  }
}
