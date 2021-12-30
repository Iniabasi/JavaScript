 /*
Sets-
Like an Array, but no duplicate items
Typically used to check for the presence of an item
*/
 
function mySet(){
    // collection will hold the set
    var collection = [];
    
    // This function will check if an element is in a set
    this.has = function(element){
      return (collection.indexOf(element) !== -1);
    };
    
    // this function will return all the values in the set
    this.values = function(){
      return collection;
    };
    
    // This function will add elements to the set
    this.add = function(element){
      if (!this.has(element)){
        collection.push(element);
        return true;
      }
      return false;
    };
    
    // This function will remove an element from the set
    this.remove = function (element){
      if(this.has(element)){
        index = collection.indexOf(element);
        collection.splice(index,1);
        return true;
      }
      return false;
    };
    
    // Return Size of the Set
    this.size = function(){
      return collection.length;
    };
    
    // this will return the union of two sets
    this.union = function(newSet){
      var unionSet = new mySet();
      var set1 = this.values();
      var set2 = newSet.values();
      
      set1.forEach(function(e) {
        unionSet.add(e);
      });
      set2.forEach(function(e){
        unionSet.add(e);
      });
      return unionSet;
    };
    
    // This function finds the intersection between two sets
    this.intersection = function(newSet){
      var intersect = new mySet();
      var set1 = this.values();
      set1.forEach(function(e){
        if(newSet.has){
          intersect.add(e);
        };
      });
      return intersect;
    };
    
    // This functin will return the difference between two sets as a new set
    this.difference = function(otherSet){
      var difference = new mySet();
      var set1 = this.values();
      set1.forEach(function(e){
        if(!otherSet.has(e)){
          difference.add(e);
        };
      });
      return difference;
    };
    
    // This method will check if the set is a subset
    this.subset = function(newSet){
      var set1 = this.values();
      return set1.every(function(value){
        return newSet.has(value);
      });
    };
    
  }