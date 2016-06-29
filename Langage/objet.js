// 1 - Utiliser des objets déjà instanciés
Math.random();
console.log();

// 2 - Possibilité d'étendre n'importe quel objet
console.write = function(msg) {
    console.log(msg);
};

console.write('Test');

// Attention à l'écriture dans des propriétés :
// Exemple (attention à la casse de innerHTML) :
// maBalise.innerHtml = 'Contenu';

// 3 - 2 syntaxes pour accéder aux membres . et []
console.log(Math.random());
console['log'](Math['random']());
var method = 'error';
console[method]('Test');

// 4 - Privilégier la syntaxe Object Literal
// quand c'est possible

// NE PAS FAIRE
var contact = new Object();
contact.prenom = 'Romain';

// FAIRE
var contact = {
    prenom: 'Romain'
};

// 5 - JSON = sur-ensemble de objet literal
// JavaScript Object Notation
// Clés en double-quotes
// String en double-quotes
// Valeurs soit scalaire (number, boolean...) soit litéraux
// (string, array, object, regexp)
var contact = {
    "prenom": "Romain"
};

var json = JSON.stringify(contact);
console.log(typeof contact); // object
console.log(typeof json); // string
// envoi sur le réseau...
var objetDepuisJSON = JSON.parse(json);
console.log(objetDepuisJSON.prenom); // Romain
console.log(objetDepuisJSON instanceof Object); // true

// Sans Pattern Option
var creerBouton = function (valeur, largeur, hauteur, couleurFond, couleurBord) {

}
creerBouton(null, null, null, null, 'yellow');

// Avec Pattern Option
var creerBouton = function(options) {
    options = options || {};
    var valeur = options.valeur || 'Contenu du bouton';
    var hauteur = options.hauteur || 50;
    var largeur = options.largeur || 120;
};

creerBouton({
   largeur: 150
});

// Regexp
var regexp = /[a-z]+/;

// 6 - Manipuler des fonctions constructeur ("Classes")
var now = new Date();
console.log(now.getYear()); // 116
console.log(typeof now); // object
console.log(typeof Date); // function

var Contact = function(prenom) {
    this.prenom = prenom;
};

var contact = new Contact('Romain');
console.log(typeof contact);
console.log(contact.prenom);

// 6.1 Methode dans l'objet
var Contact = function(prenom) {
    // portée de closure (sauvegardée)
    this.hello = function() {
        return `Bonjour je m'appelle ${prenom}`;
    };
};

var ctc1 = new Contact('Jean');
console.log(ctc1.hello()); // Bonjour je m'appelle Jean

var ctc1 = new Contact('Eric');
console.log(ctc1.hello()); // Bonjour je m'appelle Eric

// 6.2 Methode dans le prototype de la fonction constructeur
var Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

var ctc1 = new Contact('Eric');
console.log(ctc1.hello()); // Bonjour je m'appelle Eric

console.log(ctc1.hasOwnProperty('prenom')); // true
console.log(ctc1.hasOwnProperty('hello')); // false
// console.log(ctc1.toto()); // toto is not a function

// 7 - Utiliser class de ES6 (equivaut à 6.2)
class ContactES6 {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

var ctc1 = new ContactES6('Eric');
console.log(ctc1.hello()); // Bonjour je m'appelle Eric
console.log(typeof ContactES6); // function

// Nouveautés de ES5.1 (IE9)
var contact = {
    prenom: 'Romain',
    anneeNaissance: 1985
};

Object.defineProperty(contact, 'nom', {
    value: 'Bohdanowicz',
    writable: false,
    configurable: true,
    enumerable: true
});

Object.defineProperty(contact, 'age', {
    get: function() {
        var now = new Date();
        var anneeNow = now.getYear() + 1900;
        return anneeNow - this.anneeNaissance;
    }
});

console.log(contact.age); // appel la methode get()

