nicksFlicks.factory('MovieSiteFactory', function MovieSiteFactory() {
  var factory = {};
  factory.reviews = [
    {id: 1, title: "Alien XXI Is The WORST",
      description: "After watching the first 20 Alien movies and loving every second of it, i was convinced that I would love this one too. Unfortunatly, that was not the case. My dreams are ruined. My life is ruined. Everything is ruined."},
    {id: 2, title: "Just caught the weirdest movie",
      description: "Saw this movie the other day. It started out and I was like, 'ohhhhh', but then later I was like 'jeeeeeze!' and then after that i was all, 'whaaaaaaaaaa?!??!?!'. I left the movie feeling sort of like, 'woah bro', but now I don't know how I feel about it. I can't remember the title though."}
];

  factory.addReview = function() {
    factory.reviews.push( { id: factory.reviews.length + 1, title: factory.reviewTitle, description: factory.reviewDescription })
    factory.reviewTitle = null;
    factory.reviewDescription = null;
  };
  return factory;
});
