angular
.module('movieApp')
.controller('userEditCtrl', userEditCtrl);

userEditCtrl.$inject = ['User','$stateParams','$state'];
function userEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);
  vm.update = usersUpdate;

  function usersUpdate() {
    User
    .update({id: vm.user.id}, {user: vm.user})
    .$promise
    .then(() => {
      $state.go('usersShow', $stateParams);
    });
  }
}
