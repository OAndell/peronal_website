
var spacing = 15;
var tiles = [];
var tileRows = [];
var activeAnimation = true;


function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  //Added to prevent lag for other animations
  var descDiv = document.getElementById("descID");
  descDiv.onmousedown = function(){
    activeAnimation = false;
  }
  descDiv.onmouseout = function(){
    activeAnimation = true;
  }

  strokeWeight(1);
  initPattern();
  drawpattern();

}

function initPattern() {
  var opacity = 255;
  for (var y = 0; y < height; y = y + spacing) {
    opacity = opacity - 5;
    var tileCols = [];
    for (var x = 0; x < width; x = x + spacing) {
      if(random(1) > 0.5){
        tileCols.push(new Tile(x,y,1, color('#587544'),opacity))
      }
      else {
        tileCols.push(new Tile(x,y,0, color('#587544'),opacity))
      }
    }
    tileRows.push(tileCols);
  }
}

function drawpattern(){
  background('#131521');
  for (var i = 0; i < tileRows.length; i++) {
    for (var j = 0; j < tileRows[i].length; j++) {
      tileRows[i][j].draw();
    }
  }
}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  tileRows = [];
  initPattern();
  drawpattern();
}

function mousePressed(){
  if(activeAnimation){
    for (var i = 0; i < tileRows.length; i++) {
      for (var j = 0; j < tileRows[i].length; j++) {
        if(dist(tileRows[i][j].x,tileRows[i][j].y,mouseX,mouseY)<40){
            tileRows[i][j].flip();
        }
      }
    }
  }
}


function draw(){
  if(activeAnimation){
    drawpattern();
  }
}


function Tile(x,y,val,color,opacity){
  this.x = x;
  this.y = y;
  this.color = color;
  this.opacity = opacity;
  this.flipAnimation = false;
  this.angleFactor = 0;
  this.draw = function() {
    stroke(red(color),green(color),blue(color),opacity);
    push();
    if(this.flipAnimation){
      this.rotateAnimation();
    }
    else{
      (val == 0 ? line(x,y+spacing,x+spacing,y): line(x,y,x+spacing,y+spacing));
    }
    pop();
  }

  this.rotateAnimation = function(){
    push();
    translate(x+spacing/2, y+spacing/2);
    rotate(PI/2*this.angleFactor);
    this.angleFactor = this.angleFactor + 0.1;
    if(this.angleFactor >= 1){
      this.flipAnimation = false;
      this.angleFactor = 0;
      (val == 1 ? val = 0: val = 1); //flip
      pop();
      this.draw();
    }
    else{
      if(val == 0){
          line(-spacing/2,spacing/2,spacing/2,-spacing/2);
      }
      else {
          line(-spacing/2,-spacing/2,spacing/2,spacing/2);
      }
    }
    pop();
  }

  this.flip = function() {
      this.flipAnimation = true;
    }
}
