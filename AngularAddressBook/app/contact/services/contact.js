angular.module('contact.services.contact', [
    'ngResource'
])
// service pour recevoir une fonction Constructeur
// ex :
// var service = new ContactServiceClass();
// service.ajouterContact($scope.scope)
.service('ContactServiceClass', function() {
    this.ajouterContact = function(contact) {
        $http({
            method: 'POST',
            url: 'http://localhost:8080/api/v1/contacts',
            data: contact
        }).then(function successCallback(response) {
            $location.path('/');
            console.log('OK');
            console.log(response);

        }, function errorCallback(response) {
            console.log('ERREUR');
            console.log(response);
        });
    };
})
// factory est une fonction qui retourne le service
.factory('ContactService', function($resource) {
    var Contact = $resource(
        'http://localhost:8080/api/v1/contacts/:contactId',
        {contactId:'@id'}
    );

    return Contact;
});