/*
Stacks
Last in,  first out
Function: push, pop, peek, size
Using array as a stack 
*/

// Create a Stack called Stack

var Stack = function(){
    this.count = 0;
    this.storage = {};
    
    // Function Adds values to the end of the stack
    this.push = function(value){
      this.storage[this.count] = value;
      this.count++;
    }
    

  }
  
  
  