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


		   //google maps

	    $('#marker1').click(function() {
   			$('#map1').modal('show');
	   	})
	   	$('#map1').on('shown.bs.modal', function () {
	    	var currentCenter = map1.getCenter(); //get center
		    google.maps.event.trigger(map1, "resize");
		    map1.setCenter(currentCenter); //Re-set center
		})

	   	$('#marker2').click(function() {
	   		$('#map2').modal('show');
	   	})
	   	$('#map2').on('shown.bs.modal', function () {
	    	var currentCenter = map2.getCenter(); //get center
		    google.maps.event.trigger(map2, "resize");
		    map2.setCenter(currentCenter); //Re-set center
		})

	   	$('#marker3').click(function() {
	   		$('#map3').modal('show');
	   	})
	   	$('#map3').on('shown.bs.modal', function () {
    	var currentCenter = map3.getCenter(); //get center
	    google.maps.event.trigger(map3, "resize");
	    map3.setCenter(currentCenter); //Re-set center
		})

	  	$('#marker4').click(function() {
	   		$('#map4').modal('show');
	   	})
	    $('#map4').on('shown.bs.modal', function () {
    	var currentCenter = map4.getCenter(); //get center
	    google.maps.event.trigger(map4, "resize");
	    map4.setCenter(currentCenter); //Re-set center
		})


	   	$('#marker5').click(function() {
	   		$('#map5').modal('show');
	   	})
	    $('#map5').on('shown.bs.modal', function () {
    	var currentCenter = map5.getCenter(); //get center
	    google.maps.event.trigger(map5, "resize");
	    map5.setCenter(currentCenter); //Re-set center
		});





		//newsletetr sign up modal
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



		angular.element(document).ready(function() {
			$scope.songs = [{song:'Babel', link: 'https://geo.itunes.apple.com/us/album/little-lion-man/id983362067?i=983362074&mt=1&app=music'},
                         {song:'I will wait', link: 'https://geo.itunes.apple.com/us/album/i-will-wait/id547449573?i=547449577&mt=1&app=music'},
                         {song:'Choose Me', link: 'https://geo.itunes.apple.com/us/album/choose-me/id1110609098?i=1110609281&mt=1&app=music'},
                         {song:'Let it go', link: 'https://geo.itunes.apple.com/us/album/let-it-go/id948749743?i=948749751&mt=1&app=music'},
                         {song:'Till the end', link: 'https://geo.itunes.apple.com/us/album/till-the-end/id1105707158?i=1105707681&mt=1&app=music'},
                         {song:'We are free', link: 'https://geo.itunes.apple.com/us/album/we-are-free-live/id821513143?i=821513159&mt=1&app=music'}]
		$('#songsearch').keypress(function() {
			$('#songs').show();
			})
		});


	})


	.controller('BookingsForm', function($scope) {
		angular.element(document).ready(function() {	
			$(function(){
				$( "#datepicker" ).datepicker({
				  dateFormat: 'dd MM yy',
				  beforeShowDay: checkBadDates
				  })
				var $myBadDates = ["10 October 2017","21 November 2017","12 December 2017","13 January 2017","14 February 2017","15 March 2017"];

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



		$scope.registrationUser = {}; //create new object to store the date

		$scope.submitForm  = function() { //link to the form name
			if ($scope.registrationForm.$valid) {
                $scope.registrationUser.fname = $scope.fname; //linked to the name of each field with ng-model 
                $scope.registrationUser.lname = $scope.lname;
                $scope.registrationUser.email = $scope.email;
                $scope.registrationUser.date = $scope.date;
            }
            console.log($scope.registrationUser.fname + " " + $scope.registrationUser.lname + " " + $scope.registrationUser.email + " " + $scope.registrationUser.date)
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

