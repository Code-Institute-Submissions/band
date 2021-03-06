# The Hooties

## Overview

### What is this site for?

This is a site for the band the Hooties, they are able to seatch for songs, watch videos, listen to music, sign up to a mailing list and look at dates when the band is available to play. 

### What does it do?

It will allow them to see when the band are available, search for songs to lsiten on itunes music and sign up to a mailing list. 

### How does it work?

The site uses Angular JS and designed with bootstrap. 

## Features

Existing Features

 - Search for availability
 - Search for songs to listen to on itunes
 - Sign up to a mailing list

 
## Tech Used

[AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [jquery cookie](https://github.com/carhartl/jquery-cookie)
    - The site uses jqeury cookie to prevent the model from appearing every time they load the page, currently set to show after every 7 days. 
- [jqeury](http://jquery.com/)    
    - jquery is used throughout the site from date pickers to showing models.
    
## Contributing

 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone https://github.com/jamessan85/band``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request

### Testing
Testing was carried out by changing the code and loading the browser when required, checking the console logs in Google Chrome to pinpoint any errors and then amend the changes to get the code working. 

Once the site was at it's final stages it has been tested by colleagues if anything was broken in anyways, if any issues were found they were reported and have been changed. 

#### Issues Found

- Form email validation was not telling the user why the email was incorrect. 
- Added the code to Mailing List form```<p ng-show="mailList.email.$touched && mailList.email.$invalid" class="alert alert-danger">Please enter a valid email address.</p>``` and the bookings form ```<p ng-show="registrationForm.email.$touched && registrationForm.email.$invalid" class="alert alert-danger">Please enter a valid email address.</p>``` to alert the user with a red danger box if there is a problem with the email rather than the submit button disabled and the user not knowing why.

- Test users found they could book the calander with dates into the past
- minDate:0 was added to prevent dates in the past being selected.
          ```$( "#datepicker" ).datepicker({
          dateFormat: 'dd MM yy',
          beforeShowDay: checkBadDates,
          minDate: 0
          })```
