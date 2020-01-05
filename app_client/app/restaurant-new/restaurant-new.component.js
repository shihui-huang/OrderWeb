angular.
    module('restaurantNew').
    component('restaurantNew', {
        templateUrl: 'restaurant-new/restaurant-new.template.html',
        controller: ['$http', '$window',
            function RestaurantNewController($http, $window) {
                var self = this;

                self.doRequest = function() {
                    var form = {};
                    form.name = self.name;
                    form.ownerId = self.ownerId;
                    form.phone = self.phone;
                    form.address = self.address;

                    var data = JSON.stringify(form);

                    $http.post('http://localhost:3000/restaurants', data).
                        then(function success(response) {
                            self.restaurant = response.data;
                            $window.location.href = '#!/restaurants';
                        }, function error(response) {
                            console.log(response);
                        }
                    );
                };
            }
        ]
    });
