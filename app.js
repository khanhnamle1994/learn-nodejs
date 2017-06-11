function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var james = new Person('James', 'Le');
james.greet();

var harsh = new Person('Harsh', 'Sahgal');
harsh.greet();

console.log(james.__proto__);
console.log(harsh.__proto__);
console.log(james.__proto__ === harsh.__proto__);
