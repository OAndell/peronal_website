
var spacing = 15;
var tiles = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight*1.5);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  strokeWeight(1);
  //stroke('#f2b632');
  initPattern();
  drawpattern();
}

function initPattern() {
  for (var x = 0; x < width; x = x + spacing) {
    for (var y = 0; y < height; y = y + spacing) {
      if(random(1) > 0.5){
        tiles.push(new Tile(x,y,1,'#587544'));
      }
      else {
        tiles.push(new Tile(x,y,0,'#587544'));
      }
    }
  }
}

function drawpattern(){
  background('#131521');
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].draw();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight*1.5);
  tiles = [];
  initPattern();
  drawpattern();
}

function draw() {
}


/*function mousePressed(){
  for (var i = 0; i < tiles.length; i++) {
    if(dist(mouseX,mouseY,tiles[i].x,tiles[i].y) < spacing*random(1,3)){
      tiles[i].flip();
      tiles[i].draw();
    }
  }
  drawpattern();
}*/


function Tile(x,y,val,color){
  this.x = x;
  this.y = y;
  this.color = color;
  this.draw = function(color) {
    stroke(this.color);
    if(val == 0){
        line(x,y+spacing,x+spacing,y);
    }else {
        line(x,y,x+spacing,y+spacing);
    }
  }

  this.flip = function() {
      this.color = '#92C26B';
      if(val == 1){
        val = 0;
      }
      else {
        val = 1;
      }
    }
}
