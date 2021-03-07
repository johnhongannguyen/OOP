function extend(Child,Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle () {

}

extend(Circle,Shape);
// put after extend() because it will reset the constructor 
Circle.prototype.duplicate = function(){
    // comes from the implementation of duplicate method in the shape object
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}
const c = new Circle();