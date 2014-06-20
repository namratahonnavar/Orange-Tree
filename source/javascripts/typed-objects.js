// Write your Orange Tree code here - you may use constructor functions
FRUIT_BEARING_AGE = 5;
MAX_AGE = 20;

function Tree(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
 }

Tree.prototype.grow = function(){

    this.age += 1;

    this.height += 10;
    if (this.age >= FRUIT_BEARING_AGE) {
      this.orangeCount = Math.floor(Math.random() * 20 + 1);

    };
    if (this.age > MAX_AGE){
      this.die();
    }
  };

Tree.prototype.die = function(){

    this.isAlive = false;
  };
Tree.prototype.dropOrange = function(){
    orange = {};
    return orange;
}



 function pickOrange(){
    orange = {
      diameter: Math.random() * 4 + 1
    }
    return orange;
  }


// var tree = new Tree()
