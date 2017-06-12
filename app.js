var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log('My name is James');
});

emtr.on(eventConfig.GREET, function() {
  console.log('Storyville Coffee');
});

console.log('Yo');
emtr.emit(eventConfig.GREET);
