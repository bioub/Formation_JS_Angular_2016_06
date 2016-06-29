// Module
// Plusieurs Design Pattern
// IIFE (Immediately Invoked Function Expression)
// Voir aussi : CommonJS, AMD, Angular, YUI, SystemJS, ES6
(function() {
    'use strict';


}());


(function () {
    'use strict';
    
    // function declaration
    function hello() {
        console.log('Hello');
    }
    setTimeout(hello, 1000);

    // anonymous function expression
    setTimeout(function () {
        console.log('Hello');
    }, 1000);

    // named function expression
    setTimeout(function hello() {
        console.log('Hello');
    }, 1000);

    var addition = function (a, b) {
        return Number(a) + Number(b);
    };

    console.log(addition(1, 2));
    console.log(addition('1', '2'));

    var addition = function() {
        var somme = 0;

        for (var i=0; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };

    console.log(addition(1, 2, 3));

    var addition = function(a, b) {
        if (typeof a !== 'number') {
            throw new Error('Le premier arg doit etre number');
        }

        b = b || 0; // 0 par défaut

        return Number(a) + Number(b);
    };

    try {
        addition();
    }
    catch (e) {
        console.error(e.message);
    }

    console.log(addition(1));

    // pas de closure
    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100)
    }

    // avec une closure
    function closure(iSaved) {
        // portée de closure (portée sauvegardée au moment
        // du passage dans la closure)
        // 2 conditions :
        // 1 - 2 fonctions imbriquées
        // 2 - la fonction interne appelé en dehors
        // (fonction retournée ou callback)
        return function() {
            console.log(iSaved);
        };
    }

    for (var i=0; i<3; i++) {
        setTimeout(closure(i), 100)
    }

}());