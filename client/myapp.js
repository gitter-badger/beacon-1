var app = angular.module('MyApp', ['ngRoute', 'leaflet-directive']);

app.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/partials/home.ejs'
        })
        .when('/map', {
            templateUrl: 'views/partials/map.ejs',
            controller: 'mapController'
        })
        .when('/beacon', {
            templateUrl: 'views/partials/beacon.ejs',
            controller: 'beaconController'
        });
});

app.controller("indexController", function($scope) {
    $scope.relieved = '109,738';
    $scope.distress = '2,029';
    $scope.support = '158,103';
});


app.controller("feedController", function($scope) {
    $scope.feeds = [{country: "USA", time_ago:"30 minutes"}, {country: "Malaysia", time_ago:"1 hour"}, {country: "Lesotho", time_ago:"1 hour"}]
});