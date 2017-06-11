var util = require('util');

var name = 'James';
var greeting = util.format('Hello, &s', name);
util.log(greeting);
