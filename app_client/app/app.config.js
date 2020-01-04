angular.
    module('clientApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/restaurants', {
                    template: '<restaurant-list></restaurant-list>'
                }).
                when('/restaurants/:restaurantId', {
                    template: '<restaurant-detail></restaurant-detail>'
                }).
                otherwise('/restaurants');
        }
    ]);
