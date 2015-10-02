nicksFlicks.directive("changeClass", function($document) {
  return function (scope, element, attr) {
    element.bind("click", function() {
      var body = $document.find('body');
      body.toggleClass(attr.changeClass);
    });
  }
});
