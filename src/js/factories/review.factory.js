angular
  .module('movieApp')
  .factory('Review', Review);

Review.$inject = ['API', '$resource'];
function Review(API, $resource){
  return $resource(`${API}/movies/:id/reviews`, { id: '@_id'});
}
