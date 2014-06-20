/* Write your JS to modify the view here */
var new_tree = new Tree();
window.onload =function(){

var plant = document.querySelector('.plant');

plant.addEventListener('click', View.plantTree, false);
var ageTree = document.querySelector('button.age');


var pickOrange = document.querySelector('button.pick');


ageTree.addEventListener('click', View.ageNewTree, false );

pickOrange.addEventListener('click', View.pickFromTree, false);



}

var View = {

  plantTree: function(){
  var garden = document.querySelector('#orange-tree-template');
  var treePot = document.querySelector('#tree');

  treePot.className = "display-tree-small";
  garden.removeAttribute("id");
},

makeTreeBig: function(){
  var treePot = document.querySelector('#tree');
  treePot.className = "display-tree-big";

},

ageNewTree: function() {
  new_tree.grow();
  var theTreesAge = document.querySelector('p.age');
  theTreesAge.innerHTML="Age: " + new_tree.age;
  View.removeOranges();
  if (new_tree.age >= FRUIT_BEARING_AGE) {
    View.makeTreeBig();
    View.displayOranges();
  }
  if (new_tree.age > MAX_AGE ) {
    View.treeIsDead();
  };
},

displayOranges: function(){
  var fruit = document.querySelector('.fruit-count');

  fruit.innerHTML="Fruit: " + new_tree.orangeCount;
  View.placeOrangesOnTree();
},

placeOrangesOnTree: function (){
  var treePot = document.querySelector('#tree');

  for (var i = 1; i <= new_tree.orangeCount; i++) {
    var img = document.createElement('img');

    img.src = 'images/orange.gif';
    img.style.position="absolute";
    img.style.top =  "" + Math.floor(Math.random() * 270 + 220) + "px";
    img.style.left =  "" + Math.floor(Math.random() * 270 + 300) + "px";
    treePot.appendChild(img);
  };

},

removeOranges: function(){
  var treePot = document.querySelector('#tree');
  treePot.innerHTML='';
},

pickFromTree: function(){
  new_tree.orangeCount -= 1;
  View.removeOranges();
  View.displayOranges();

},

treeIsDead: function(){
  var theTreesAge = document.querySelector('p.age');
  theTreesAge.innerHTML="Tree is dead :(";
  View.removeOranges();
  var ageTree = document.querySelector('button.age');
  var pickOrange = document.querySelector('button.pick');
  var treePot = document.querySelector('#tree');
  var fruit = document.querySelector('.fruit-count');
  fruit.className="hide";
  ageTree.className="hide";
  pickOrange.className="hide";
  treePot.className="hide";
},

}