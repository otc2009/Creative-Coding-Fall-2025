let skyCol;
let go = false;
let nightCol;
let dayCol;
let cars = [];
let city = [];
let n = 0;
let m = 5;
let carHeight = 0;
let v = 2;
let n2;
let v2 = 3;
let n3;
let v3 = 1;
let t = 0;
function setup(){
  createCanvas(windowWidth,windowHeight);
  skyCol = color(0,0,0);
  nightCol = color(100,100,100);
  dayCol = color(170, 215, 230);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  noStroke();
  carHeight = height-5;
  n = -m;
  n2 = width + m;
  n3 = -m;
  textFont('Courier New');
  text('City Generator', windowWidth/2, windowHeight/2-75);
  text('Click for a City!', windowWidth/2, windowHeight/2);
}

function draw(){
  if(go){
    background(skyCol);
    if(t > 0.6){
      fill(255, 255, 0);
      ellipse(windowWidth, 0, 200);
    }
    else{
      fill(255);
      ellipse(width-100, -15, 75);
      ellipse(width-50, -10, 75);
      ellipse(width, 10, 75)
    }
    drawClouds();
    fill(255,220,120,120);
    for(let b of city){ 
      b.draw(); 
    }
    car1Goin();
    car2Goin();
    car3Goin();
  }
}

function mousePressed(){ 

  go=true;
  t = random();
  skyCol = lerpColor(nightCol, dayCol, t);
  city=[];
  let x=0;
  while(x<width){
    let w=int(random(40,90));
    let h=int(random(100,500));
    city.push(new Building(x,height-h,w,h));
    x+=w+random(0,10);
  }
}



class Building{
  constructor(x,y,w,h){
    this.x=x; 
    this.y=y; 
    this.w=w; 
    this.h=h;
    this.c=color(20+random(50),20+random(50),20+random(50));
    this.windows=[];
    let s=5; 
    let p=8;
    for(let yy=y+25; yy<y+h-20; yy+=s+p){
      for(let xx=x+10; xx<x+w-10; xx+=s+p){
        if(random()<0.7) {
          this.windows.push([xx,yy,s,s,random([true,false])]);
        }
      }
    }
  }
  draw(){
    fill(this.c); 
    rect(this.x,this.y,this.w,this.h);
    fill(0,80); 
    rect(this.x,this.y,this.w,10); 
    for(let w of this.windows){
      if (w[4]) {
        fill(color(255,230,120));
      } else {
        fill(color(40,40,60));     
      }      
      rect(w[0],w[1],w[2],w[3],2);
    }
    

  }
}
function drawClouds(){
  fill(255);
  ellipse(300, 10, 75);
  ellipse(250, 30, 75);
  ellipse(190, 0, 75)
  ellipse(350, -15, 75);
  
  ellipse(600, 10, 75);
  ellipse(625, 0, 75);
  ellipse(650, 35, 75)
  ellipse(550, -15, 75);
  ellipse(700, 0, 75);
  ellipse(750, -10, 75);

  ellipse(950, 10, 75);
  ellipse(1000, 0, 75);
  ellipse(900, -15, 75);
  ellipse(1050, 0, 75);
  ellipse(1100, -10, 75);

  ellipse(0, 10, 75);
  ellipse(50, 0, 75);
  ellipse(75, -15, 75);
}

function car1Goin(){
  fill(100);
  rect(n-13,carHeight-15, m*2+10, 13);
  n+=v;
  if(n > width+20 + m+10){
    n = -m;
  }
  fill(10);
  circle(n-10,carHeight, m*2);
  n+=v;
  if(n > width + m+10){
    n = -m;
  }
  circle(n,carHeight, m*2);
  n+=v;
  if(n > width + m+10){
    n = -m;
  }
  
}
function car2Goin(){
  fill(100);
  rect(n2-16,carHeight-15, m*2+10, 13);
  n2+=v2;
  if(n2 < -m-20){
    n2 = width + m + 10;
  }
  fill(10);
  circle(n2-15,carHeight, m*2);
  n2-=v2;
  if(n2 < -m-10){
    n2 = width + m + 10;
  }
  circle(n2,carHeight, m*2);
  n2-=v2;
  if(n2 < -m-10){
    n2 = width + m + 10;
  }
  
}
function car3Goin(){
  fill(100);
  rect(n3-13,carHeight-15, m*2+10, 13);
  n3+=v3;
  if(n3 > width+20 + m+10){
    n3 = -m;
  }
  fill(10);
  circle(n3-10,carHeight, m*2);
  n3+=v3;
  if(n3 > width + m+10){
    n3 = -m;
  }
  circle(n3,carHeight, m*2);
  n3+=v3;
  if(n3 > width + m+10){
    n3 = -m;
  }
  
}