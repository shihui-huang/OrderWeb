angular.
    module('restaurantDelete').
    component('restaurantDelete', {
        controller: ['$http', '$routeParams', '$window',
            function RestaurantDeleteController($http, $routeParams, $window) {
                var self = this;

                $http.delete('http://localhost:3000/restaurants/' + $routeParams.restaurantId).
                    then(function success(response) {
                        console.log(response);
                        $window.location.href = '#!/restaurants';
                    }, function error(response) {
                        console.log(response);
                    }
                );
            }
        ]
    });
