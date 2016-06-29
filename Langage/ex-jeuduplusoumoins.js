/*
Exercice jeu du plus ou moins :
1 - Générer un entier aléatoire entre 0 et 100 (voir Math sur MDN)
2 - Proposer à l'utilisteur de saisir un entier avec Readline de Node
et afficher si le nombre est plus grand ou plus petit
3 - Pouvoir rejouer jusqu'à ce que l'entier soit trouvé
4 - Gérer les erreurs de saisie (saisie 'ABC'...)
5 - Stocker les tentatives dans un tableaux et réafficher entre
chaque tour (Array sur MDN, ressemble à List Java)
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const entierAlea = Math.floor(Math.random() * 101);
var essais = [];

function jouer() {

    if (essais.length) {
        console.log('Précédents essais : ' + essais.join(', '));
    }

    rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {

        var entierSaisi = Number.parseInt(answer);

        if (isNaN(entierSaisi)) {
            console.error('Il faut saisir un entier');
            return jouer();
        }

        essais.push(entierSaisi);

        if (entierAlea > entierSaisi) {
            console.log('Plus grand');
            return jouer();
        }

        if (entierAlea < entierSaisi) {
            console.log('Plus petit');
            return jouer();
        }

        console.log('Gagné');
        rl.close();
    });

}

jouer();

