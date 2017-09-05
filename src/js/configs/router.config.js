angular
.module('movieApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'vm'
  })
  .state('moviesIndex', {
    url: '/movies',
    templateUrl: '/js/views/movies/index.html',
    controller: 'moviesIndexCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
