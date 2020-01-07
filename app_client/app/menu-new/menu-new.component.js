angular.
    module('menuNew').
    component('menuNew', {
        templateUrl: 'menu-new/menu-new.template.html',
        controller: ['$http', '$window', '$routeParams',
            function menuNewController($http, $window, $routeParams) {
                var self = this;

                self.doRequest = function() {
                    var form = {};
                    form.name = self.name;
                    form.description = self.description;
                    form.price = self.price;
                    form.is_available = self.is_available;
                    form.restaurantId = $routeParams.restaurantId;

                    var data = JSON.stringify(form);

                    $http.post('http://localhost:3000/menus', data).
                        then(function success(response) {
                            self.menu = response.data;
                            $window.location.href = '#!/restaurants/'+$routeParams.restaurantId;
                        }, function error(response) {
                            console.log(response);
                        }
                    );
                };
            }
        ]
    });
