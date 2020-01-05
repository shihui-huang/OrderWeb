angular.
    module('restaurantEdit').
    component('restaurantEdit', {
        templateUrl: 'restaurant-edit/restaurant-edit.template.html',
        controller: ['$http', '$routeParams', '$window',
            function RestaurantEdit($http, $routeParams, $window) {
                var self = this;

                $http.get('http://localhost:3000/restaurants/' + $routeParams.restaurantId).
                    then(function success(response) {
                        self.restaurant = response.data[0];
                    }, function error(response) {
                        console.log(response);
                    }
                );

                self.doRequest = function() {
                    var form = {};
                    form.name = self.restaurant.name;
                    form.ownerId = self.restaurant.ownerId;
                    form.phone = self.restaurant.phone;
                    form.address = self.restaurant.address;
                
                    var data = JSON.stringify(form);
                
                    $http.put('http://localhost:3000/restaurants/' + $routeParams.restaurantId, data).
                        then(function success(response) {
                            console.log(response);
                            $window.location.href = '#!/restaurants/' + $routeParams.restaurantId;
                        }, function error(response) {
                            console.log(response);
                        }
                    );
                };
            }
        ]
    });
