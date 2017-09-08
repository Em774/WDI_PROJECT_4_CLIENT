angular
.module('movieApp')
.factory('Review', Review);

Review.$inject = ['API', '$resource'];
function Review(API, $resource){
  return $resource(`${API}/reviews/:id`, { id: '@_id'}, {
    update: {method: 'PUT'}
  });
}
