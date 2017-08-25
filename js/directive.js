//navtop directive
angular.module('NavDirective',[]).directive('navtop', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/navtop.html',
  };
})
//news container directive
angular.module('NewsCont',[]).directive('newscontainer', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/directives/newscontainer.html',
    controller: 'NewsletterSignupController'
	};
})
//maillist directive
angular.module('MailList',[]).directive('maillist', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/maillist.html',
    controller: 'MailListSignUp'
  };
})
//footer directive
angular.module('Footer',[]).directive('footer', function() {
  return {
    restrict: 'A',    // A -> attribute
    templateUrl: 'templates/directives/footer.html',
    controller: 'FooterController'
  };
})