angular
.module('movieApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.user = { image: '' };

  vm.register = register;

  function register() {
    if (vm.user.image === '') {
      vm.user.image = 'http://www.thehindu.com/sci-tech/technology/internet/article17759222.ece/alternates/FREE_660/02th-egg-person';
    }
    User
    .register(vm.user)
    .$promise
    . then(() => {
      CurrentUserService.getUser();
      $state.go('moviesIndex');
    });
  }
}
