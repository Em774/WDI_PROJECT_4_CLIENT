angular
.module('movieApp')
.factory('Comment', Comment);

Comment.$inject = ['API', '$resource'];
function Comment(API, $resource){
  return $resource(`${API}/movies/:id/reviews/:id/comments`, { id: '@_id'});
}
