angular.
    module('clientApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/login', {
                    template: '<login></login>'
                }).
                when('/register', {
                    template: '<register></register>'
                }).
                when('/restaurants', {
                    template: '<restaurant-list></restaurant-list>'
                }).
                when('/restaurants/:restaurantId', {
                    template: '<restaurant-detail></restaurant-detail>'
                }).
                otherwise('/restaurants');
        }
    ]);
