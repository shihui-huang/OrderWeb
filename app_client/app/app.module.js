// Define the 'clientApp' module
angular.module('clientApp', [
    // ...which depends on the 'restaurantList' module
    'ngRoute',
    'login',
    'restaurantDetail',
    'restaurantList'
]);
