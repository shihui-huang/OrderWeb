angular.
    module('restaurantDetail').
    component('restaurantDetail', {
        templateUrl: 'restaurant-detail/restaurant-detail.template.html',
        controller: ['$http', '$routeParams',
            function RestaurantDetailController($http, $routeParams) {
                var self = this;

                $http.get('http://localhost:3000/restaurants/' + $routeParams.restaurantId).
                    then(function success(response) {
                        self.restaurant = response.data[0];
                    }, function error(response) {
                        console.log(response);
                    }
                );
                $http.get('http://localhost:3000/restaurants/' + $routeParams.restaurantId + '/menus').
                //$http.get('http://localhost:3000/menus').
                    then(function success(response) {
                        self.menus = response.data;
                        console.log(self.menus);
                    }, function error(response) {
                        console.log(response);
                    }
                );
            }
        ]
    });
