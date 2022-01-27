
function Box(x,y,z,r){
  this.pos = createVector(x,y,z);
  this.r = r;
  
  this.generate = function(){
    boxes = [];
    for(var x=-1;x<2;x++){
      for(var y=-1;y<2;y++){
        for(var z=-1;z<2;z++){
          var sum = abs(x) + abs(y) + abs(z);
          if(sum > 1){
            var newR = this.r/3;
            var newX = this.pos.x+x*newR;
            var newY = this.pos.y+y*newR;
            var newZ = this.pos.z+z*newR;
            var b = new Box(newX,newY,newZ,newR);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }
  
  this.show = function(){
    push();
    translate(this.pos.x,this.pos.y,this.pos.z);
    noStroke();
    fill(255,255,0);
    box(r);
    pop();
  }
}