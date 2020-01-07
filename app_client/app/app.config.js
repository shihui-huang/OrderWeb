angular.
    module('clientApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/restaurants', {
                    template: '<restaurant-list></restaurant-list>'
                }).
                when('/restaurants/new', {
                    template: '<restaurant-new></restaurant-new>'
                }).
                when('/restaurants/:restaurantId', {
                    template: '<restaurant-detail></restaurant-detail>'
                }).
                when('/restaurants/:restaurantId/delete', {
                    template: '<restaurant-delete></restaurant-delete>'
                }).
                when('/restaurants/:restaurantId/edit', {
                    template: '<restaurant-edit></restaurant-edit>'
                }).
                when('/restaurants/:restaurantId/menus/new', {
                    template: '<menu-new></menu-new>'
                }).
                when('/restaurants/:restaurantId/menus/:menuId/delete', {
                    template: '<menu-delete></menu-delete>'
                }).
                when('/restaurants/:restaurantId/menus/:menuId/edit', {
                    template: '<menu-edit></menu-edit>'
                }).
                otherwise('/restaurants');
        }
    ]);
