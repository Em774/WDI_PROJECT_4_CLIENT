angular
.module('movieApp')
.controller('reviewEditCtrl', reviewEditCtrl);

reviewEditCtrl.$inject = ['$uibModalInstance', 'Review','$stateParams', 'CurrentUserService', 'review', '$rootScope'];
function reviewEditCtrl($uibModalInstance, Review, $stateParams, CurrentUserService, review, $rootScope) {
  const vm = this;

  vm.review = review;
  vm.update = reviewUpdate;
  vm.closeModal  = closeModal;

  // $rootScope.$on('reviewEdited', (event, args) => vm.reviews.push(args.data));

  function reviewUpdate(){
    Review
    .update({ id: vm.review.id }, {review: vm.review})
    .$promise
    .then(review => {
      console.log(review);
      // $rootScope.$broadcast('reviewEdited', { data: review });
    });

    closeModal();
  }

  function closeModal() {
    $uibModalInstance.close();
  }

}
