angular.
    module('menuEdit').
    component('menuEdit', {
        templateUrl: 'menu-edit/menu-edit.template.html',
        controller: ['$http', '$routeParams', '$window',
            function menuEdit($http, $routeParams, $window) {
                var self = this;

                $http.get('http://localhost:3000/menus/' + $routeParams.menuId).
                    then(function success(response) {
                        self.menu = response.data[0];
                    }, function error(response) {
                        console.log(response);
                    }
                );

                self.doRequest = function() {
                    var form = {};
                    form.name = self.menu.name;
                    form.description = self.menu.description;
                    form.price = self.menu.price;
                    // form.is_available = self.menu.is_available;
                    form.category = self.menu.category;
                    form.restaurantId = $routeParams.restaurantId;
                    console.log(form.restaurantId);

                    var data = JSON.stringify(form);

                    $http.put('http://localhost:3000/menus/' + $routeParams.menuId, data).
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
