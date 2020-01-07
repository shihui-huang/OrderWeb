angular.module('authentificationApp')
    .factory('Auth', ['$http', '$rootScope', '$window',
        'Session', 'AUTH_EVENTS',
        function ($http, $rootScope, $window, Session, AUTH_EVENTS) {
            authService.connexion() = function(){};
            authService.estConnecte() = function(){};
            authService.estAutorise() = function(){};
            authService.deconnexion() = function(){};
            return authService;
        }]);