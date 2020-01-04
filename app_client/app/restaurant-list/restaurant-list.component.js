// Register 'restaurantList' component on the 'restaurantList' module, along with its associated controller and template
angular.
    module('restaurantList').
    component('restaurantList', {  // This name is what AngularJS uses to match to the `<restaurant-list>` element.
        // Note: The URL is relative to our `index.html` file
        templateUrl: 'restaurant-list/restaurant-list.template.html',
        controller: ['$http',
            function RestaurantListController($http) {
                var self = this;
                
                $http.get('http://localhost:3000/restaurants').then(function(response) {
                    self.restaurants = response.data;
                });
            }
        ]
    });
