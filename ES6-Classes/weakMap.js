// WeakMap is essentially a dictionary 
// where keys and objects, and value can be anything
// call WeakMap because keys are weak -  no reference - can be collected garbage
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(radius){
        _radius.set(this,radius);
        _move.set(this,()=>{
            console.log('moving',this);
        })

    }

    draw(){
        console.log(_radius.get(this));
        _move.get(this)();
        console.log('draw');
    }
}
const c = new Circle(1);

