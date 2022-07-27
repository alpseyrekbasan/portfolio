function setup() {
    var canvasDiv = document.getElementById('myCanvas');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(width,height-80);
    console.log(sketchCanvas);
    sketchCanvas.parent('myCanvas');
}


function draw(){
  background(248,45);
  fill(0);
  circle(mouseX,mouseY,40);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight-280);
}
