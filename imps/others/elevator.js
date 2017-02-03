// implement an elevator class that has the following properties
// The elevator should have a few basic methods to move it and tell us what floor it is on
// It should also have methods to add a destination floor from both inside and outside the elevator
// When a destination is added from the inside, it should be a higher priority than a destination added from the outside
// The elevator should stop at floors that exterior requests are made from that are on the way to the next target floor
// The elevator should be able to tell you where it is and where it is going.
function Elevator(numFloors){
  this.height = numFloors;
  this.currentFloor = 0;
  this.floorQueue = ???;

  this.interiorAdd = function(floor){

  }

  this.exteriorAdd = function(from, to){

  }

  this.move = function(){

  }

  this.nextFloor = function(){

  }
}
