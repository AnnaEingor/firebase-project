var myApp = angular.module("myApp",['ngRoute', 'firebase']);

myApp.config(function($routeProvider){
    $routeProvider
 .when("/", {
   templateUrl: "index.html",
   
   })

   .when("/page1", {
    templateUrl: "page1/page1.html",
    controller: "page1"
       })
       .when("/page2", {
        templateUrl: "page2/page2.html",
        controller: "page2"
           })
    .when("/page1/login", {
        templateUrl: "pageLogin",
        controller: "loginCtrl"
    })
      });
