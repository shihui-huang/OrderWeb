var clientApp = angular.module('clientApp', ['ngRouter']);

clientApp.config(['$routeProvider',function($routerProvider) {

    $routerProvider

      .when('/home', {
         template: '<p>ppp</p>',
         Controller:homeController,
     })
    .otherwise({
        redirectTo:'/home'
    });
      // .state('menu', {
      //    url: '/menu',
      //    templateUrl: 'view/menu.html'
      // });
      //
      // $urlRouterProvider.otherwise('/');

}]);
