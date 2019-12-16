var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
       url: '/home',
       templateUrl: 'page_home/home.html'
    })

    .state('menu', {
       url: '/menu',
       templateUrl: 'page_menu/menu.html'
    });

    $urlRouterProvider.otherwise('home');

});
