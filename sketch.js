var a=0;
var b=0;

var sponge = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  b = new Box(0,0,0,200);
  sponge.push(b);
}

function draw() {
  background(45);
  lights();
  
  rotateX(a);
  rotateY(a*0.9);
  rotateZ(a*1.1);
  for( var i =0;i<sponge.length;i++) //noprotect
    sponge[i].show();
  a+=0.01;
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    var next = [];
    for(var i=0;i<sponge.length;i++){
      var newBoxes = sponge[i].generate();
      for(var j=0;j<newBoxes.length;j++){
        next.push(newBoxes[j]);
      }
    }
    sponge = next;
  }else if(keyCode === LEFT_ARROW){
    sponge = [];
    b = new Box(0,0,0,200);
    sponge.push(b);
  }
}