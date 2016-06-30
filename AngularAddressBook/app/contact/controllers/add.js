angular.module('contact.controllers.add', [])
    .controller('ContactAddController', ['$scope', '$http', '$location', function($scope, $http, $location) {

        $scope.ajouter = function() {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/api/v1/contacts',
                data: $scope.contact
            }).then(function successCallback(response) {
                $location.path('/');
                console.log('OK');
                console.log(response);

            }, function errorCallback(response) {
                console.log('ERREUR');
                console.log(response);
            });
        };
/*
1/
A l'aide de l'API Reference d'AngularJS
Se servir du service $routeParams pour récupérer l'id dans l'URL

2 / Construire l'URL vers l'API REST
Puis créer la variable contactToShow sur le scope
Ajouter dans la vue l'email et le téléphone s'ils sont présent

3 / Créer la page avec le formulaire d'ajout
- Créer un controlleur
- Créer une vue
- Créer une route dans app.js
 */
    }]);