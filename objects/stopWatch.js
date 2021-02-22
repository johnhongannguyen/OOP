function Stopwatch(){
    let duration = 0;
    this.start = function(){
        console.log('start');
    };
    this.stop = function (){
        console.log('stop');
    };
    this.reset = function(){
        console.log('reset');
    };

}
const sw = new Stopwatch();

console.log(sw);