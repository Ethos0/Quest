var Engine = {Component: exports};

Engine.Component.Body = function(){
    //Can equip items and such
    this.slots = {
        head: [],
        upperBody: [],
        lowerBody: []
    };
}

Engine.Component.Body.prototype.Equip = function(item, slot){
    //tries to equip the item in the specified slot (over currently equipped clothes)
}

Engine.Component.Body.prototype.Remove = function(item){
    //tries to remove the specified item (if equipped)
}

// Engine.Component.Container /////////////////////////////////////////////////
Engine.Component.Container = function(capacity){
    //Can hold up to a certain number of items
    this.capacity = capacity;
}