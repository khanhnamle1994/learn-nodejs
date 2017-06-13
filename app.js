var obj = {
  name: 'James Le',
  greet: function() {
    console.log(`Hello ${ this.name }`);
  }
}

obj.greet();
obj.greet.call({ name: 'James Le' });
obj.greet.apply({ name: 'James Le' });
