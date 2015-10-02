nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, MovieSiteFactory) {
  $scope.reviews = MovieSiteFactory.reviews;
  $scope.MovieSiteFactory = MovieSiteFactory;
});
