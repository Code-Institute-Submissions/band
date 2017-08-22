angular.module('NavDirective',[]).directive('navtop', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/navtop.html',
  };
})

angular.module('NewsCont',[]).directive('newscontainer', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/directives/newscontainer.html',
    controller: 'NewsletterSignupController'
	};
})

angular.module('MailList',[]).directive('maillist', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/maillist.html',
    controller: 'MailListSignUp'
  };
})

angular.module('Footer',[]).directive('footer', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/footer.html',
    controller: 'FooterController'
  };
})