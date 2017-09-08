angular
.module('movieApp')
.controller('CommentReviewCtrl', CommentReviewCtrl);

CommentReviewCtrl.$inject = ['$uibModalInstance', 'comment', 'review', 'Comment', '$rootScope', 'Review'];
function CommentReviewCtrl($uibModalInstance, comment, review, Comment, $rootScope, Review){
  const vm = this;
  vm.comment = comment;
  vm.review = review;

  // vm.review = review.id;

  Review
    .fetch({id: vm.review.id})
    .$promise
    .then(res => vm.reviewId = res.id);

  vm.commentCreate = function commentCreate() {
    vm.commentToSubmit = {
      note: vm.comment.note,
      review_id: vm.review.id,
      user_id: vm.review.user.id
    };
    console.log(vm.commentToSubmit);

    // Comment
    // .save({id: vm.review}, vm.commentToSubmit)
    // .$promise
    // .then(comment => {
    //   $rootScope.$broadcast('commentCreated', {data: comment});
    // });
    // closeCommentModal();
  };

  function closeCommentModal() {
    $uibModalInstance.close();
  }
  vm.closeComment = closeCommentModal;

}
