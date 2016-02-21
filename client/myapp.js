var app = angular.module('MyApp', ['ngRoute', 'leaflet-directive']);

app.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/partials/home.ejs'
        })
        .when('/map', {
            templateUrl: 'views/partials/map.ejs',
            controller: 'mapController'
        });
});