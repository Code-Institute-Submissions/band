angular.module('RouteControllers', [])

	.controller('NewsletterSignupController', function($scope, $http) {


		$http.get("js/tour.json").then(function(response) {
        $scope.myTour = response.data.tour;
   		 });

		angular.element(document).ready(function() {
			$('#headpicture').mouseenter(function() {
				$('.jumbotron').css('background-color', '#f7f7f4');
				$('.textdisplay').slideDown();
			})
			$('#headpicture').mouseleave(function() {
				$('.textdisplay').slideUp();
			})

		   
			//show modal
		   $('#submit').click(function() {
		   		$('#newsletter').modal('hide')
		   })




		//newsletter sign up modal
	   if (Cookies.get('newsletteronce') == null) {
			Cookies.set ('newsletteronce', 'yes', {expires: 7});
			setTimeout(function(){
           $('#newsletter').modal()
              },3000); // 3 seconds.	
		}

		//greeting message
		var today = new Date()
	  	var timemessage = today.getHours()

		  if (timemessage > 18) {
		    $('.goodday').text('Good Evening');
		  }
		  else if (timemessage > 12) {
		    $('.goodday').text('Good Afternoon');
		  }
		  else if (timemessage > 0) {
		    $('.goodday').text('Good Morning');
		  }
		  else {
		    $('.goodday').text('Howdy');
		  }





		});
	})

	.controller('FooterController', function() {
		$(window).scroll(function() {
		 	if ($(this).scrollTop()>0) {
		 		$( "#containerfooter" ).addClass('transparent');
		 	} else {
		 		$( "#containerfooter" ).removeClass('transparent');
		 	}
		});

		angular.element(document).ready(function(){
			$("#containerfooter").mouseover(function() {
				$('#containerfooter').css('opacity', '1');
			})
			$("#containerfooter").mouseleave(function() {
				$('#containerfooter').css('opacity', '0.2');
			})
		});

	})

	.controller('MusicSearch', function($scope, $http) {

		$http.get("js/musiclist.json").then(function(response) {
        $scope.myData = response.data.music;
   		 });


	})


	.controller('BookingsForm', function($scope, $http) {
		angular.element(document).ready(function() {	
			$(function(){
				$( "#datepicker" ).datepicker({
				  dateFormat: 'dd MM yy',
				  beforeShowDay: checkBadDates,
				  minDate: 0
				  })
				var $myBadDates = ["10 October 2017","21 November 2017","12 December 2017","13 January 2017","14 February 2017","15 March 2017","22 September 2017","04 September 2017","18 September 2017"];

				function checkBadDates(mydate){
				var $return=true;
				var $returnclass ="available";
				$checkdate = $.datepicker.formatDate('dd MM yy', mydate);
				for(var i = 0; i < $myBadDates.length; i++)
				  {    
				     if($myBadDates[i] == $checkdate) {
				      $return = false;
				      $returnclass= "unavailable";
				      }
				  }
				return [$return,$returnclass];
				}
			})
		})



		$scope.registrationUser = {}; //create new object to store the data

		$scope.submitForm  = function() { //link to the form name
			if ($scope.registrationForm.$valid) {
                $scope.registrationUser.fname = $scope.fname; //linked to the name of each field with ng-model 
                $scope.registrationUser.lname = $scope.lname;
                $scope.registrationUser.email = $scope.email;
                $scope.registrationUser.date = $scope.date;
            }
        }

		$scope.submitForm=function(){
        /* while compiling form , angular created this object*/
        var data=$scope.fields;  
        /* post to server*/
        $http.post("js/bookings.json", data); 
        console.log(data);
    	}

	

	})

	.controller('MailListSignUp', function($scope) {
		$scope.mailinglistUser = {}; //create new object to store the date

		$scope.submitMailList  = function() { //link to the form name
			if ($scope.mailList.$valid) {
                $scope.mailinglistUser.name = $scope.fname; //linked to the name of each field with ng-model
                $scope.mailinglistUser.email = $scope.email;
            }
            console.log($scope.registrationUser.fname + " " + $scope.registrationUser.lname + " " + $scope.registrationUser.email + " " + $scope.registrationUser.date)
		}

	})

