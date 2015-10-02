nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, MovieSiteFactory, UtilitiesFactory) {

  $scope.reviews = MovieSiteFactory.reviews;
  $scope.MovieSiteFactory = MovieSiteFactory;

  $scope.individualReview = UtilitiesFactory.findById(MovieSiteFactory.reviews, $stateParams.reviewId);
});
