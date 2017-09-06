angular
  .module('movieApp')
  .controller('reviewNewCtrl', reviewNewCtrl);

reviewNewCtrl.$inject = ['$uibModalInstance', 'movie', '$state', 'Movie'];
function reviewNewCtrl($uibModalInstance, movie, $state, Movie) {
  const vm = this;
  vm.movie = movie;
  vm.review = {};
  // vm.create = reviewCreate;

  Movie
    .fetch({ movie_api_id: vm.movie.movie_api_id })
    .$promise
    .then(res => vm.movieId = res.id);
  // $http
  //   .get(`http://localhost:3000/api/getmovies/b/${vm.movie.movie_api_id}`)
  //   .then(res => console.log(res));



  function closeModal() {
    $uibModalInstance.close();
  }

  vm.close = closeModal;








  // function reviewCreate(){
  //   Review
  //     .save(vm.review)
  //     .$promise
  //     .then(() => $state.go('moviesIndex'));
  // }
}
