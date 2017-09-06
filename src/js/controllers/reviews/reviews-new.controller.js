angular
.module('movieApp')
.controller('reviewNewCtrl', reviewNewCtrl);

reviewNewCtrl.$inject = ['$uibModalInstance', 'movie', '$state', 'Movie', 'CurrentUserService', 'Review'];
function reviewNewCtrl($uibModalInstance, movie, $state, Movie, CurrentUserService, Review) {
  const vm = this;
  vm.movie = movie;
  // vm.create = reviewCreate;

  Movie
  .fetch({ movie_api_id: vm.movie.movie_api_id })
  .$promise
  .then(res => vm.movieId = res.id);
  // $http
  //   .get(`http://localhost:3000/api/getmovies/b/${vm.movie.movie_api_id}`)
  //   .then(res => console.log(res));

  vm.reviewCreate = function reviewCreate(){
    vm.reviewToSubmit = {
      title: vm.review.title,
      note: vm.review.note,
      rating: vm.review.rating,
      user_id: CurrentUserService.currentUser.id,
      movie_id: vm.movieId
    };
    console.log(vm.reviewToSubmit);
    Review
      .save({ id: vm.movieId }, vm.reviewToSubmit)
      .$promise
      .then(res => {
        console.log(res);
      });
    closeModal();
  };

  function closeModal() {
    $uibModalInstance.close();
  }
  vm.close = closeModal;
}
