
var spacing = 15;
var tiles = [];

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  strokeWeight(1);
  initPattern();
  drawpattern();
}

function initPattern() {
  var opacity = 255;
  for (var y = 0; y < height; y = y + spacing) {
    opacity = opacity - 5;
    for (var x = 0; x < width; x = x + spacing) {
      if(random(1) > 0.5){
        tiles.push(new Tile(x,y,1, color('#587544'),opacity));
      }
      else {
        tiles.push(new Tile(x,y,0,color('#587544'),opacity));
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
  resizeCanvas(window.innerWidth, window.innerHeight);
  tiles = [];
  initPattern();
  drawpattern();
}


function draw() {
}


function Tile(x,y,val,color,opacity){
  this.x = x;
  this.y = y;
  this.color = color;
  this.opacity = opacity;
  this.draw = function() {
    stroke(red(color),green(color),blue(color),opacity);
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
