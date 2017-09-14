angular
.module('movieApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  // .state('home', {
  //   url: '/',
  //   templateUrl: '/js/views/home.html'
  // })
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
  // .state('usersIndex', {
  //   url: '/users',
  //   templateUrl: '/js/views/index.html',
  //   controller: 'UsersIndexCtrl',
  //   controllerAs: 'vm'
  // })
  .state('moviesIndex', {
    url: '/',
    templateUrl: '/js/views/movies/index.html',
    controller: 'moviesIndexCtrl',
    controllerAs: 'vm'
  })
  .state('moviesShow', {
    url: '/movies/:id',
    templateUrl: '/js/views/movies/show.html',
    controller: 'moviesShowCtrl',
    controllerAs: 'vm'
  })
  .state('reviewNew', {
    url: '/review/new',
    templateUrl: '/js/views/partials/reviewNewModal.html',
    controller: 'reviewNewCtrl',
    controllerAs: 'vm'
  })
  .state('commentReview', {
    url: '/comment/new',
    templateUrl: '/js/views/partials/commentReviewModal.html',
    controller: 'CommentReviewCtrl',
    controllerAs: 'vm'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'userShowCtrl',
    controllerAs: 'vm'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'userEditCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
