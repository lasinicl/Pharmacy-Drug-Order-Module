/**
 * Created by PAVANI on 5/21/2017.
 */
var myApp = angular.module('myApp', ['ngRoute']);
console.log("Sasitha ");

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl : 'orders/home.html',
        controller : 'requestOrderController'
    })
        .when('/directory', {
            templateUrl : 'orders/directory.html',
            controller : 'orderController'
        }).otherwise({
        redirectTo : '/home',
        controller : 'orderController'
    });
}]);

