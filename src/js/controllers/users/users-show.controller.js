angular
.module('movieApp')
.controller('userShowCtrl', userShowCtrl);

userShowCtrl.$inject = ['User', '$stateParams'];
function userShowCtrl(User, $stateParams) {
  const vm = this;

  User
  .get($stateParams)
  .$promise
  .then(res => {
    // vm.movies = [];
    vm.user   = res;
    //
    // vm.reviewedMovies = vm.user.reviews.map(function(review, index, self) {
    //   if (review.movie.id !== self[index].id) {
    //     return true;
    //   }
    //   // return review.movie;
    //
    // });
    //
    //
    // vm.reviewedMovies.forEach((movie, index) => {
    //   console.log(vm.movies[index]);
    //   // if (movie.id !== vm.movies[index].id) {
    //   //   return movie;
    //   // }
    // });
    //
    // console.log(vm.reviewedMovies);
  });
}
