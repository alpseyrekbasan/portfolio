// save this file as sketch.js
// Sketch One


  let startArc = false;
  function rotateArc(){
      background(248);
      if( startArc == false) {

        startArc = true; }
      else { startArc = false;


      }
    console.log(startArc);

  }

var s = function( p ) { // p could be any variable name
  let arc1 = [];
  let moverX = 0;
  let moverY = 0;
  let moverZ = 0;
  p.setup = function() {
    var myCanvas = p.createCanvas(windowWidth, windowHeight,WEBGL);
    myCanvas.parent('c1');

    p.angleMode(DEGREES);
    p.background(248);
  for (let i = 0; i < 24; i++) {

    arc1[i] = new Arcs(
      p.random(int(350)),
      p.random(int(60)),
      p.random(0),
      p.random(300),
      1,
      p.random(150)
      );
    }
  }


  p.draw = function() {
    if (startArc) {


      p.background(248);
      p.noStroke();
      p.smooth();
      // sphere(50);
      for (let i = 0; i < 24; i++) {
        arc1[i].move(moverX,moverY,moverZ);
        arc1[i].body();

      }

      moverX+= 0.1;
      moverY+= 0.1;
      moverZ+= 0.1;

      p.fill(248);
      p.sphere(20);

    } else {
      // p.clear()
      p.rect(windowWidth,windowHeight)
      p.fill(248)

    }

    }
    class Arcs {

      constructor(size,arcNum,rotNum,maskSize,w,dist){
        this.size = size;
        this.arcNum = arcNum;
        this.rotNum = rotNum;
        this.maskSize =maskSize;
        this.w = w;
        this.dist = dist;
      }

      body(){
       // rotateZ(this.rotNum)

       for (var i = 0; i < this.arcNum ; i++) {

            p.rotateZ(this.w * 2.4);

            // noFill(0);
            p.fill(0);
            // stroke(0);
            // strokeWeight(15);
            p.arc(this.dist, 0, this.size, this.size, -this.w, this.w, PIE);
            // fill(255,255,255);
            // arc(50, 0, this.size-this.maskSize, this.size-this.maskSize, -1.5, 1.5, PIE);

          }

        for (var i = 0; i < this.arcNum ; i++) {

            p.rotateZ(this.w * 2.4);
            // noFill(0);
            // fill(0);
            // // stroke(0);
            // strokeWeight(15);
            // arc(50, 0, this.size, this.size, -1.5, 1.5, PIE);
            p.fill(248);
            p.arc(this.dist, 0, this.size-this.maskSize, this.size-this.maskSize,-this.w, this.w,  PIE);

          }

      }

      move(moverX,moverY,moverZ){

            this.moverX=moverX;
            this.moverY=moverY;
            this.moverZ=moverZ;

        p.rotateX(this.moverX)
        p.rotateY(this.moverY)
        p.rotateZ(this.moverZ)


      }

    }


    p.windowResized = function() {


      p.resizeCanvas(windowWidth, windowHeight -320);
      p.background(248);
  };

};
var myp5 = new p5(s, 'c1');
