function Circle(){
    this.radius = radius;
    // in order to hide it from the outside- so we set it as a variable
    let defaultLocation = {x:0 , y:0};
    // should hide these details, expose something is essential
    // this.defaultLocation = {x:0, y:0};
    // this.computeOptimumLocation = function(){
    //     //....
    // }

    // private method
    let computeOptimumLocation = function(factor){

    }

    this.draw = function(){
        // closure determines what variables will be accessible to an inner function, and stay there
        // the scope is temporary and it dies

        // let x,y;
        // defaultLocation
        // this.radius;
        computeOptimumLocation(0.1);
        console.log('drawing');
    }
}

const circle = new Circle(10);
circle.draw();