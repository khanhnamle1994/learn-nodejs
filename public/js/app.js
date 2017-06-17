angular.module('TestApp', []);

angular.module('TestApp')
  .controller('MainController', ctrlFunc);

function ctrlFunc() {
  this.message = 'Hello';

  this.people = [
    {
      name: 'James Le'
    },
    {
      name: 'Harsh Sahgal'
    },
    {
      name: 'Hanna Saba'
    }
  ];
}
