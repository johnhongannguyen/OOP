function Circle(){
    this.radius = radius;
    // should hide these details, expose something is essential
    // this.defaultLocation = {x:0, y:0};
    // this.computeOptimumLocation = function(){
    //     //....
    // }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log('drawing');
    }
}

const circle = new Circle(10);
circle.draw();