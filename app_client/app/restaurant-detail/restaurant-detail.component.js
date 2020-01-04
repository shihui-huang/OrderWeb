angular.
    module('restaurantDetail').
    component('restaurantDetail', {
        templateUrl: 'restaurant-detail/restaurant-detail.template.html',
        controller: ['$http', '$routeParams',
            function RestaurantDetailController($http, $routeParams) {
                var self = this;

                $http.get('restaurants/' + $routeParams.restaurantId + '.json').then(function(response) {
                    self.restaurant = response.data;
                });
            }
        ]
    });
