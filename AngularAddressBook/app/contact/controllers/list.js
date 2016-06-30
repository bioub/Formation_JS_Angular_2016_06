angular.module('contact.controllers.list', [
    'contact.services.contact'
])
.controller('ContactListController', ['$scope', 'ContactService', function($scope, ContactService) {

    $scope.contacts = ContactService.query();

    $scope.supprimer = function(contact) {
        contact.$delete();
    };
}]);