var person = {
  firstname: 'James',
  lastname: 'Le',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};

person.greet();

console.log(person['firstname']);
