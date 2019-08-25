import defaultTheme from '../../defaultdata/defaultTheme.json'


export default function Background (p) {
  var spacing =20;
  var activeTiles = [];
  var tileRows = [];
  var redraw = false;

  var mainColor = 0;
  var backgroundColor = 0;

  
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);

      mainColor = defaultTheme.backgroundLines;
      backgroundColor = defaultTheme.background;

      initPattern();
      drawpattern();

    };

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
      if(props.colorTheme!==null){
        if(props.colorTheme.background !== backgroundColor || props.colorTheme.backgroundLines !== mainColor ){
          backgroundColor = props.colorTheme.background;
          mainColor = props.colorTheme.backgroundLines;
          redraw = true;
        }
      }
    };

  
    p.draw = function () {
      if(redraw){
        drawpattern();
        redraw = false;
      }
    };

    function initPattern() {
      var opacity = 255;
      for (var y = 0; y < p.height; y = y + spacing) {
        opacity = opacity - 8;
        var tileCols = [];
        for (var x = 0; x < p.width; x = x + spacing) {
          if(p.random(1) > 0.9){
            tileCols.push(new Tile(x,y,1,opacity))
          }
          else {
            tileCols.push(new Tile(x,y,0,opacity))
    
          }
        }
        tileRows.push(tileCols);
      }
    }

    function drawpattern(){
      p.background(backgroundColor);
      for (var i = 0; i < tileRows.length; i++) {
        for (var j = 0; j < tileRows[i].length; j++) {
          tileRows[i][j].draw(mainColor); //color
        }
      }
    }



    function Tile(x,y,val,opacity){
      this.x = x;
      this.y = y;
      this.opacity = opacity;
      this.flipAnimation = false;
      this.angleFactor = 0;
      this.draw = function(color) {
        p.stroke(p.red(color),p.green(color),p.blue(color),opacity);
        p.push();
        if(this.flipAnimation){
          this.rotateAnimation();
        }
        else{
          p.stroke(backgroundColor);
          (val === 0 ? p.line(x,y+spacing,x+spacing,y): p.line(x,y,x+spacing,y+spacing));
          p.stroke(p.red(color),p.green(color),p.blue(color),opacity);
          (val === 0 ? p.line(x,y+spacing,x+spacing,y): p.line(x,y,x+spacing,y+spacing));
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
          (val === 1 ? val = 0: val = 1); //flip
          p.pop();
          this.draw();
        }
        else{
          //stroke(red(color)+10,green(color)+20,blue(color)+10,opacity*1.1);
          //strokeWeight(2);
          if(val === 0){
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
  