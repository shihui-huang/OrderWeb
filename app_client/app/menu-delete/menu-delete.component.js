angular.
    module('menuDelete').
    component('menuDelete', {
        controller: ['$http', '$routeParams', '$window',
            function MenuDeleteController($http, $routeParams, $window) {
                var self = this;

                $http.delete('http://localhost:3000/menus/' + $routeParams.menuId).
                    then(function success(response) {
                        console.log(response);
                        $window.location.href = '#!/restaurants/' + $routeParams.restaurantId;
                    }, function error(response) {
                        console.log(response);
                    }
                );
            }
        ]
    });
