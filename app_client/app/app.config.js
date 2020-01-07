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
                when('/checkout', {
                    template: '<ngcart-cart></ngcart-cart>'
            }).
                otherwise('/restaurants');
        }
    ]);

var authentificationApp = angular.module('authentificationApp', ['ui.router', 'ui.bootstrap'])
    /*Les constantes gérant la connexion sont définies ici*/
    .constant('USER_ROLES', {
        all : '*',
        admin : 'admin',
        user : 'user',
        owner : 'owner'
    })
    .constant('AUTH_EVENTS', {
        connexionReussie : 'auth-connexion-reussie',
        connexionEchouee : 'auth-connnexion-echouee',
        deconnexionReussie : 'auth-deconnexion-reussie',
        sessionExpiree : 'auth-session-expiree',
        nonConnecte : 'auth-non-connecte',
        nonAutorise : 'auth-not-autorise'
    });