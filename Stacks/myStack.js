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
    
    // Function Removes and Returns Value at the end of the stack
    this.pop = function(){
      if(this.count === 0){
        return undefined;
      }
      
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
      
    }
    
    // Function returns the element at the end of the stack without removing it
    this.peek = function(){
      return this.storage[this.count-1];
    }
    
    // Function returns the size of the stack
    this.size = function(){
      return this.count;
    }
  }
  
  
  