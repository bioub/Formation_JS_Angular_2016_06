angular.module('contact.controllers.list', [])
.controller('ContactListController', ['$scope', function($scope) {
    $scope.contacts = [{
        prenom: 'Jean',
        nom: 'Dupont'
    }, {
        prenom: 'Eric',
        nom: 'Martin'
    }];
    
    $scope.afficher = function(contact) {
        // TODO changer demain
        $scope.$root.contactToShow = contact;
    };
}]);