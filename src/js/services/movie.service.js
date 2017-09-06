angular
  .module('movieApp')
  .service('movieService', function() {
    var movie = [];

    var addMovie = function(newMovie){
      movie.push(newMovie);
    };

    var getMovie = function(){
      return movie;
    };

    return {
      addMovie: addMovie,
      getMovie: getMovie
    };

  });
