angular
  .module('movieApp')
  .controller('userShowCtrl', userShowCtrl);

userShowCtrl.$inject = ['User', '$stateParams'];
function userShowCtrl(User, $stateParams) {
  const vm = this;


  vm.user = User.get($stateParams);
  console.log(vm.user);

}
