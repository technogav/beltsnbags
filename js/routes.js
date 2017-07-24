angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/red", {
        templateUrl : "bags.html"
    })
    .when("/green", {
        templateUrl : "belts.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});