export default function Background (p) {
  var spacing =20;
  var activeTiles = [];
  var tileRows = [];

  
    p.setup = function () {
      var canvas = p.createCanvas(window.innerWidth, window.innerHeight);

      p.background('#131521');
      initPattern();
      drawpattern();
      p.noLoop();
    };

  
    p.draw = function () {
      //p.background(0);
    };

    function initPattern() {
      var opacity = 255;
      for (var y = 0; y < p.height; y = y + spacing) {
        opacity = opacity - 8;
        var tileCols = [];
        for (var x = 0; x < p.width; x = x + spacing) {
          if(p.random(1) > 0.9){
            tileCols.push(new Tile(x,y,1, p.color('#587544'),opacity))
          }
          else {
            tileCols.push(new Tile(x,y,0, p.color('#587544'),opacity))
    
          }
        }
        tileRows.push(tileCols);
      }
    }

    function drawpattern(){
      p.background('#131521');
      for (var i = 0; i < tileRows.length; i++) {
        for (var j = 0; j < tileRows[i].length; j++) {
          tileRows[i][j].draw();
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
        p.stroke(p.red(color),p.green(color),p.blue(color),opacity);
        p.push();
        if(this.flipAnimation){
          this.rotateAnimation();
        }
        else{
          p.stroke('#131521');
          (val == 0 ? p.line(x,y+spacing,x+spacing,y): p.line(x,y,x+spacing,y+spacing));
          p.stroke(p.red(color),p.green(color),p.blue(color),opacity);
          (val == 0 ? p.line(x,y+spacing,x+spacing,y): p.line(x,y,x+spacing,y+spacing));
        }
        p.pop();
      }
    
      this.rotateAnimation = function(){
        p.push();
        p.translate(x+spacing/2, y+spacing/2);
        p.push();
        p.noStroke();
        p.rectMode(p.CENTER);
        p.rotate(p.PI/4);
        p.ellipse(0,0,p.sqrt(p.sq(spacing)+p.sq(spacing))*1.1);
        p.pop();
        p.rotate(p.PI/2*this.angleFactor);
        this.angleFactor = this.angleFactor + p.PI/70;
        if(this.angleFactor >= 1){
          this.flipAnimation = false;
          this.angleFactor = 0;
          (val == 1 ? val = 0: val = 1); //flip
          p.pop();
          this.draw();
        }
        else{
          //stroke(red(color)+10,green(color)+20,blue(color)+10,opacity*1.1);
          //strokeWeight(2);
          if(val == 0){
            p.line(-spacing/2,spacing/2,spacing/2,-spacing/2);
          }
          else {
            p.line(-spacing/2,-spacing/2,spacing/2,spacing/2);
          }
          p.strokeWeight(1);
        }
        p.pop();
      }
    
      this.flip = function() {
          this.flipAnimation = true;
      }
    }

  };
  