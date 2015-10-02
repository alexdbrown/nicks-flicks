nicksFlicks.factory('MovieSiteFactory', function MovieSiteFactory() {
  var factory = {};
  factory.reviews = [
    {title: "Alien XXI Is The WORST",
      description: "After watching the first 20 Alien movies and loving every second of it, i was convinced that I would love this one too. Unfortunatly, that was not the case. My dreams are ruined. My life is ruined. Everything is ruined."}
  ];

  factory.addReview = function() {
    var review = { title: factory.title, description: factory.description };
    factory.review.push(review);
    factory.reviewTitle = null;
    factory.reviewDescription = null;
  };
  return factory;
});
