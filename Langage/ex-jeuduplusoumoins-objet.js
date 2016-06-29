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

const Jeu = require('./Jeu');

var jeu = new Jeu({
    min: 0,
    max: 100,
    msg: 'Veuillez saisir un entier entre 0 et 100'
});
jeu.jouer();

