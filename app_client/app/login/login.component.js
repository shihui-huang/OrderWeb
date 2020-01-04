// Register 'login' component on the 'login' module, along with its associated controller and template
angular.
    module('login').
    component('login', {  // This name is what AngularJS uses to match to the `<login>` element.
        // Note: The URL is relative to our `index.html` file
        templateUrl: 'login/login.template.html'
    });
