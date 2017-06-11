// function statement
function greet() {
  console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetme = function() {
  console.log('Hi Tony');
}
greetme();

// it's first-class
logGreeting(greetme);

// use a function expression on the fly
logGreeting(function() {
  console.log('Hello Tony!');
});
