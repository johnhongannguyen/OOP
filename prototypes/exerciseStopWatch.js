function Stopwatch(){
    let startTime, endTime, running, duration = 0;
   
    Object.defineProperty(this,'duration', {
        get: function(){
            return duration;
        },
        set: function(value){
            duration = value;

        }
    });
    // 3 public properties
    Object.defineProperty(this,'startTime', {
        get: function(){
            return startTime;
        }
    });
    Object.defineProperty(this,'endTime', {
        get: function(){
            return endTime;
        }
    });
    Object.defineProperty(this,'running', {
        get: function(){
            return running;
        }
    });

}

// prototype methods 
Stopwatch.prototype.start = function(){
    if(this.running)
     throw new Error('Stopwatch is already running');

     this.running = true;
     this.startTime = new Date();
 };
 Stopwatch.prototype.stop = function (){
     if(!this.running)
         throw new Error ('Stopwatch is already ended');
         this.running = false;
     this.endTime = new Date();
     
     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
     // public read property
     this.duration += seconds;
     
 };
 Stopwatch.prototype.reset = function(){
    this.startTime = null;
   this.endTime = null;
    this.running = false;
    this.duration = 0;
 };

// Premature optimization is the root of all evils

console.log(sw);
// this line is for testing 