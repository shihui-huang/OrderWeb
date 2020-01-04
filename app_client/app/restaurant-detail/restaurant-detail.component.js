angular.
    module('restaurantDetail').
    component('restaurantDetail', {
        templateUrl: 'restaurant-detail/restaurant-detail.template.html',
        controller: ['$routeParams',
            function RestaurantDetailController($routeParams) {
                this.restaurantId = $routeParams.restaurantId;
            }
        ]
    });
