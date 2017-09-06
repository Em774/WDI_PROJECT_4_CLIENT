angular
.module('movieApp')
.factory('Movie', Movie);

Movie.$inject = ['API', '$resource'];
function Movie(API, $resource) {
  return $resource(`${API}/movies/:id`, { id: '@_id'}, {
    update: { method: 'PUT'},
    fetch: { method: 'GET', url: `${API}/getmovies/b/:movie_api_id`, isArray: false }
  });
}
