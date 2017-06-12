var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('My name is James');
});

emtr.on('greet', function() {
  console.log('Storyville Coffee');
});

console.log('Yo');
emtr.emit('greet');
