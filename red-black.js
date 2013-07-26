// Usage: > m.edge(String)
// Continue until you win!

var repl = require('repl')
;

var win = function win() {
  console.log('You have won with two black cards!');
  process.exit();
};

var MachineStates = {
  red: function red(action) {
    return MachineStates[action] || MachineStates['red'];
  },
  black: function black(action) {
    if (action === 'black') win();
    else return MachineStates[action] || MachineStates['black'];
  }
}

function Model(){
  this.state = MachineStates.red;
}
Model.prototype.edge = function(action) {
  console.log('Current state is %s', this.state.name);
  
  this.state = this.state(action);

  console.log('Updated state is %s', this.state.name);
}

var server = repl.start({ prompt: "> " });

server.context.m = new Model;

