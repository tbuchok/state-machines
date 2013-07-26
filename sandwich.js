var repl = require('repl')
;

var deliver = function deliver(contents) {
  console.log(  'Mmm! You are about to eat: \n\n==========\n %s \n==========\n\n'
              , contents.join('\n')
              );
  process.exit();
}

function Sandwich() {
  this.states = [ 
                  'addBread'
                , 'addMeat'
                , 'addCheese' 
                , 'addMayo'
                , 'addMustard'
                , 'addLettuce'
                ]

  this.contents = [];
  this.currentState = null;
}
Sandwich.prototype.edge = function(action) {
  this.currentState = this[action]() || this.currentState;
}
Sandwich.prototype.addBread = function addBread() {
  var state = this.currentState;
  if (this.currentState === null) {
    state = this.addBread;
  } else if (this.currentState !== this.addBread) {
    deliver(this.contents);
  }
  
  return state;
}
Sandwich.prototype.addMeat = function addMeat() {
  var state = this.currentState;
  if (this.currentState != null && this.currentState !== this.addMeat) {
    state = this.addMeat;
    this.contents.push('meat');
  }
  
  return state;
}
Sandwich.prototype.addCheese = function addCheese() {
  var state = this.currentState;
  if (this.currentState != null && this.currentState !== this.addCheese) {
    state = this.addCheese;
    this.contents.push('cheese');
  }
  
  return state;
} 
Sandwich.prototype.addMayo = function addMayo() {
  var state = this.currentState;
  if (this.currentState != null && this.currentState !== this.addMayo) {
    state = this.addMayo;
    this.contents.push('mayo');
  }
  return state;
}
Sandwich.prototype.addMustard = function addMustard() {
  var state = this.currentState;
  if (this.currentState != null && this.currentState !== this.addMustard){
    state = this.addMustard;
    this.contents.push('mustard');
  } 
  
  return state;
}
Sandwich.prototype.addLettuce = function addLettuce() {
  var state = this.currentState;
  if (this.currentState != null && this.currentState !== this.addLettuce) {
    state = this.addLettuce;
    this.contents.push('lettuce');
  }
  
  return state;
}

var server = repl.start({ prompt: "> " });
server.context.s = new Sandwich;