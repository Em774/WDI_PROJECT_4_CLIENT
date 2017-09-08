angular
.module('movieApp')
.controller('moviesShowCtrl', moviesShowCtrl);

moviesShowCtrl.$inject = ['Movie', '$http', '$stateParams', '$uibModal', '$rootScope', 'CurrentUserService', '$sce'];
function moviesShowCtrl(Movie, $http, $stateParams, $uibModal, $rootScope, CurrentUserService, $sce) {
  const vm = this;

  vm.open                = openModal;
  vm.editReview          = editReview;
  // vm.commentReview       = commentReview;
  vm.showLoadingGif = false;

  $rootScope.$on('reviewCreated', (event, args) => {
    getReviewData();
    vm.reviews.push(args.data);
  });

  $http
  .get(`https://api.themoviedb.org/3/movie/${$stateParams.id}?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&append_to_response=videos`)
  .then(res => {
    vm.all = res.data;

    vm.disableReviewButton = false;

    getReviewData();

    vm.link = $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${vm.all.videos.results[0].key}`);
  });

  function getReviewData() {
    Movie
    .fetch({movie_api_id: $stateParams.id})
    .$promise
    .then(data => {
      vm.reviews = data.reviews;

      vm.reviews.forEach(review => {
        if (review.user.id === CurrentUserService.currentUser.id) {
          vm.disableReviewButton = true;
        }
      });
    });
  }


  function saveMovie() {
    vm.movie = {
      title: vm.all.title,
      image: vm.all.poster_path,
      year: vm.all.release_date,
      genre: JSON.stringify(vm.all.genres),
      popularity: vm.all.popularity,
      video: vm.all.video,
      movie_api_id: parseInt($stateParams.id)
    };
    Movie.save(vm.movie);
  }

  function openModal() {
    saveMovie();
    $uibModal.open({
      templateUrl: 'js/views/partials/reviewNewModal.html',
      controller: 'reviewNewCtrl as vm',
      resolve: {
        movie: () => {
          return vm.movie;
        }
      }
    });
  }

  function editReview() {
    vm.reviews.find(review => {
      if (review.user.id === CurrentUserService.currentUser.id) {
        vm.review = review;
      }
    });

    $uibModal.open({
      templateUrl: 'js/views/partials/reviewEditModal.html',
      controller: 'reviewEditCtrl as vm',
      resolve: {
        review: () => {
          return vm.review;
        }
      }
    });
  }

  // function commentReview() {
  //   $uibModal.open({
  //     templateUrl: 'js/views/partials/commentReviewModal.html',
  //     controller: 'CommentReviewCtrl as vm',
  //     resolve: {
  //       comment: () => {
  //         return vm.comment;
  //       },
  //       review: () => {
  //         return vm.review;
  //       }
  //     }
  //   });
  // }
}
