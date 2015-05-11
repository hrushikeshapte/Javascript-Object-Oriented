/**
 * Created by Hrushi on 5/9/15.
 */

//Base Class Stopwatch
var StopWatch = function(){
    this.time = 0;
    this.startTime = false;

    var start = function(){
       this.startTime = true;
        return this;
    };

    var stop = function(){
        this.startTime = false;
        return this ;
    };

    var reset = function(){
      this.time = 0;
      return this;
    };

    var log = function(){
        console.log(this.time);
    };

    //function which adds delay of 100
    var wait = function(){
        if (this.startTime == true){
        this.time += 100;
        }
        return this;
    };

    this.start  = start;
    this.stop   = stop;
    this.reset  = reset;
    this.log = log;
    this.wait = wait;
};

var sw = new StopWatch();

console.log("Part 1");
console.log("This is the Output for given sample use cases");
sw.start().stop().start().log();

sw.wait();
sw.log();

sw.wait();
sw.stop().log();

sw.wait();
sw.log();

sw.reset().log();

//Racer inherits from base class StopWatch
Racer.prototype = new StopWatch();

//Constructor
function Racer() {
        Racer.all.push(this);
        var temp;

        //Function to start all Racers
        Racer.all.start = function(){
          for(var i = 0 ; i< Racer.all.length ; i++){
              Racer.all[i].startTime = true;
          }

         //Function to find Winner
         Racer.getWinner = function(){
           temp = Math.min(Racer.all[0].time, Racer.all[1].time,Racer.all[2].time);
             if(temp == Racer.all[0].time){
                 return Racer.all[0];
             }
             else if(temp == Racer.all[1].time){
                 return Racer.all[1];
             }
             else{
                 return Racer.all[2];
             }

         }

        };
    }

Racer.all = [];

var sumeet = new Racer();
var travis = new Racer();
var harshit = new Racer();

console.log("");
console.log("Part 2");
console.log(Racer.all[0] === sumeet);
console.log(Racer.all[1] === travis);
console.log(Racer.all[2] === harshit);

Racer.all.start();

sumeet.stop().log();

harshit.wait();
harshit.stop().log();

travis.wait().wait();
travis.stop().log();

console.log(Racer.getWinner() === sumeet);
