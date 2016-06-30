angular.module('app', [
    'ngRoute',
    'ngResource',
    'contact.controllers.list',
    'contact.controllers.show',
    'contact.controllers.add'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ContactListController',
        templateUrl: 'app/contact/views/list.html'
    });

    $routeProvider.when('/contacts/ajouter', {
        controller: 'ContactAddController',
        templateUrl: 'app/contact/views/add.html'
    });


    $routeProvider.when('/contacts/:id', {
        controller: 'ContactShowController',
        templateUrl: 'app/contact/views/show.html'
    });



    $routeProvider.otherwise({
        controller: 'ContactListController',
        templateUrl: 'app/contact/views/list.html'
    });
}]);