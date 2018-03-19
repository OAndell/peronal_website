
var spacing =20;

var activeTiles = [];
var tileRows = [];

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  //Added to prevent lag for other animations
  /*var descDiv = document.getElementById("descID");
  descDiv.onmousedown = function(){
    noLoop();
  }
  descDiv.onmouseout = function(){
    loop();
  }*/

  background('#131521');
  initPattern();
  drawpattern();
  fill('#131521');
}

function initPattern() {
  var opacity = 255;
  for (var y = 0; y < height; y = y + spacing) {
    opacity = opacity - 8;
    var tileCols = [];
    for (var x = 0; x < width; x = x + spacing) {
      if(random(1) > 0.5){
        tileCols.push(new Tile(x,y,1, color('#587544'),opacity))
        //tileCols.push(new Tile(x,y,1, color(random(50,255),random(50,255),random(50,255)),opacity))
      }
      else {
        tileCols.push(new Tile(x,y,0, color('#587544'),opacity))
        //tileCols.push(new Tile(x,y,0, color(random(50,255),random(50,255),random(50,255)),opacity))

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
  activeTiles = [];
  initPattern();
  drawpattern();
}



function draw(){
    if(random(1)>0.75){
      var row = int(random(1,tileRows.length-10));
      var col = int(random(1,tileRows[row].length-1));
      var tilePos = {
        row:row,
        col:col
      };
      activeTiles.push(tilePos)
      tileRows[row][col].flip();
    }
    else{
      for (var i = 0; i < activeTiles.length; i++) {
        var row = activeTiles[i].row;
        var col = activeTiles[i].col;
        tileRows[row][col].draw();
        tileRows[row][col+1].draw();
        tileRows[row+1][col].draw();
        tileRows[row][col-1].draw();
        tileRows[row-1][col].draw();
        tileRows[row-1][col-1].draw();
        tileRows[row+1][col+1].draw();
        tileRows[row+1][col-1].draw();
        tileRows[row-1][col+1].draw();
      }
      for (var i = activeTiles.length - 1; i >= 0; i--) {
        if (!tileRows[activeTiles[i].row][activeTiles[i].col].flipAnimation) {
            activeTiles.splice(i, 1);
        }
      }
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
      stroke('#131521');
      (val == 0 ? line(x,y+spacing,x+spacing,y): line(x,y,x+spacing,y+spacing));
      stroke(red(color),green(color),blue(color),opacity);
      (val == 0 ? line(x,y+spacing,x+spacing,y): line(x,y,x+spacing,y+spacing));
    }
    pop();
  }

  this.rotateAnimation = function(){
    push();
    translate(x+spacing/2, y+spacing/2);
    push();
    noStroke();
    rectMode(CENTER);
    rotate(PI/4);
    ellipse(0,0,sqrt(sq(spacing)+sq(spacing))*1.1);
    pop();
    rotate(PI/2*this.angleFactor);
    this.angleFactor = this.angleFactor + PI/70;
    if(this.angleFactor >= 1){
      this.flipAnimation = false;
      this.angleFactor = 0;
      (val == 1 ? val = 0: val = 1); //flip
      pop();
      this.draw();
    }
    else{
      //stroke(red(color)+10,green(color)+20,blue(color)+10,opacity*1.1);
      //strokeWeight(2);
      if(val == 0){
          line(-spacing/2,spacing/2,spacing/2,-spacing/2);
      }
      else {
          line(-spacing/2,-spacing/2,spacing/2,spacing/2);
      }
      strokeWeight(1);
    }
    pop();
  }

  this.flip = function() {
      this.flipAnimation = true;
  }
}
