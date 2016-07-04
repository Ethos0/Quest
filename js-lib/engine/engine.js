var Engine = exports;
Engine.Component = require('./component');

Engine.Game = function(data){
    this.data = data;
}


Engine.Object = function(game, template){
    this.template = template;
    this.components = {};
}

