var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
        controller: 'HeadersCtrl'
      },
      'body': {
        templateUrl: "partials/reviews.html",
        controller: 'ReviewsCtrl'
      },
    }
  });

  $stateProvider.state('reviews.individual-review', {
    url: "/:reviewId",
    templateUrl: "partials/individual.review.html",
    controller: 'ReviewsCtrl'

  });

});
