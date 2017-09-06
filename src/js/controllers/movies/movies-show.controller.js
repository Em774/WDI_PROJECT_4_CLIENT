angular
.module('movieApp')
.controller('moviesShowCtrl', moviesShowCtrl);

moviesShowCtrl.$inject = ['Movie', '$http', '$stateParams', '$uibModal'];
function moviesShowCtrl(Movie, $http, $stateParams, $uibModal) {
  const vm = this;

  $http
  .get(`https://api.themoviedb.org/3/movie/${$stateParams.id}?api_key=8d027704c57524153a0af2b38415ac45&language=en-US&append_to_response=videos`)
  .then(res => {
    console.log(res);
    vm.all = res.data;
  });

  // $http
  // .get(`http://youtube.com/watch?v=${vm.all.results.key}`)
  // .then(response => {
  //   console.log(response);
  // });


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
    Movie.save(vm.movie)
    .$promise
    .then(data => {
      console.log(data);
    });
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
  vm.open = openModal;
}


//get the id from the first request
// put it inside the url
//create a movie.

// function createMovie(movie){
//   Movie.create(){
//       name:
//   }
//
//
// }
//
// movie.save
