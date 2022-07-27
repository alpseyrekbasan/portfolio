

//
// let startSol = false;
// function startSolar(){
//     if( startSol == false) startSol = true;
//     else startSol = false;
//   console.log(startSol);
//
// }

var s = function( p ) {

let diamond = [];

let x = 0;
let y = 0;
let color = 0;

  p.setup = function() {
    var myCanvas = p.createCanvas(windowWidth, windowHeight);
    myCanvas.parent('c1');
  for (let i = 0; i < 6; i++) {

    //size,pull,w,h1, h2,dist,num,rotNum

    diamond[i] = new Diamond(
      int(random(1,5))*5,
      random(15),
      map(random(3),0,3,0.25,1.5),
      map(random(3),0,3,0.5,3.5),
      map(random(3),0,3,0.5,3.5),
      50+i*75,
      int(random(1,4)) * int(random(1,4)) * int(random(1,3)) * 3,
      30
    );
  }
}



  p.draw = function() {
    // if (startSol) {
  p.background(248)
  p.fill(color);
  p.noStroke();
  p.translate(windowWidth/2,windowHeight/2);
  p.scale(0.65)

  x = map(sin(frameCount*0.01),-1,1,0,1.5);
  y = map(sin(frameCount*0.01),-1,1,0,1.5);

  for (let i = 0; i < 6; i++) {

    diamond[i].body(x,y,color);

  }

  p.circle(0,0,x*10)

  if (x <= 0.000001) {

    x = 0;

    for (let i = 0; i < 6; i++) {

      diamond[i] = new Diamond(
        int(random(1,5))*5,
        random(15),
        map(random(3),0,3,0.25,1.75),
        map(random(3),0,3,0.5,4),
        map(random(3),0,3,0.5,4),
        50+i*75,
        int(random(1,4))* int(random(1,4)) *int(random(1,3)) * 3,
        30
      );
    }
  }
// }
//
// p.mousePressed = function(){
//
//   for (let i = 0; i < 6; i++) {
//
//     diamond[i] = new Diamond(
//       int(random(1,5))*5,
//       random(15),
//       map(random(3),0,3,0.25,1.75),
//       map(random(3),0,3,0.5,4),
//       map(random(3),0,3,0.5,4),
//       50+i*75,
//       int(random(1,4))* int(random(1,4)) * int(random(1,3)) * 3 ,
//       30
//     );
//   }
// }
}
class Diamond{

  constructor(size,pull,w,h1, h2,dist,num,rotNum){
    this.size = size;
    this.pull = pull;
    this.w = w;
    this.h1 = h1;
    this.h2 = h2;
    this.dist = dist;
    this.num = num;
    this.rotNum = rotNum;
  }

  body(scaler1, scaler2, color){
    this.scaler1 = scaler1;
    this.scaler2 = scaler2;
    this.color = color;
    p.fill(this.color);

    for (var i = 0; i < this.num; i++ ) {
      p.rotate(360/this.num);
      // rotateX(this.num);
      p.push()
      p.translate(0,this.dist);

      p.beginShape();

      p.vertex(-this.size * this.w *scaler1, 0);

      p.quadraticVertex(0, this.pull, 0, this.size * this.h1*scaler2 );
      p.quadraticVertex(0, this.pull, this.size * this.w*scaler1, 0);

      p.quadraticVertex(0, -this.pull, 0, -this.size * this.h2 *scaler2);
      p.quadraticVertex(0, -this.pull, -this.size * this.w *scaler1, 0);

      p.endShape();
      p.pop();
    }
  }
}

p.windowResized = function() {
  p.resizeCanvas(windowWidth, windowHeight);
}
}

var myp5 = new p5(s, 'c1');
