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
      var setone = this.values();
      var settwo = newSet.values();
      
      setone.forEach(function(e) {
        unionSet.add(e);
      });
      settwo.forEach(function(e){
        unionSet.add(e);
      });
      return unionSet;
    }
  } 