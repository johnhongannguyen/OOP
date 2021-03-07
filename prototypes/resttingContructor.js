// whenever reset the prototype 
// make sure reset constructor as well 

function Shape (color) {
    this.color = color;
}

Shape.prototype.duplicate = function (){
    console.log('duplicate');
}
function extend(Child, Parent){
    // resetting the prototype
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child ; 

}
function Circle(radius,color){
    Shape.call(this,color)
    this.radius = radius;

}
extend(Circle,Shape);

Circle.prototype.draw= function(){
    console.log('drawing');
}

// create square 
function Square(size) {
    this.size = size;
}

// resetting the prototype of Square
extend(Square,Shape);

const s = new Shape();
const c = new Circle (1, 'blue');
const sq = new Square(10);
