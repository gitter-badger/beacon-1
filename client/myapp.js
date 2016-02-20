var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'views/partials/home.ejs'
        });
    
})