angular
.module('movieApp')
.controller('reviewNewCtrl', reviewNewCtrl);

reviewNewCtrl.$inject = ['$uibModalInstance', 'movie', '$state', 'Movie', 'CurrentUserService', 'Review', '$rootScope'];
function reviewNewCtrl($uibModalInstance, movie, $state, Movie, CurrentUserService, Review, $rootScope) {
  const vm = this;
  vm.movie = movie;
  // vm.create = reviewCreate;

  Movie
  .fetch({ movie_api_id: vm.movie.movie_api_id })
  .$promise
  .then(res => vm.movieId = res.id);

  vm.reviewCreate = function reviewCreate(){
    vm.reviewToSubmit = {
      title: vm.review.title,
      note: vm.review.note,
      rating: vm.review.rating,
      user_id: CurrentUserService.currentUser.id,
      movie_id: vm.movieId
    };

    Review
      .save(vm.reviewToSubmit)
      .$promise
      .then(review => {
        $rootScope.$broadcast('reviewCreated', { data: review });
      });

    closeModal();
  };

  function closeModal() {
    $uibModalInstance.close();
  }
  vm.close = closeModal;
}
