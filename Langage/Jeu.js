const readline = require('readline');

function Jeu(options)
{
    options = options || {};
    this.min = options.min || 0;
    this.max = options.max || 100;
    this.msg = options.msg || 'Entier ?';

    this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    this.entierAlea = Math.floor(Math.random() * 101);
    this.essais = [];
}

Jeu.prototype.jouer = function() {

    var that = this;

    if (that.essais.length) {
        console.log('Précédents essais : ' + that.essais.join(', '));
    }

    that.rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {

        var entierSaisi = Number.parseInt(answer);

        if (Number.isNaN(entierSaisi)) {
            console.error('Il faut saisir un entier');
            return that.jouer();
        }

        that.essais.push(entierSaisi);

        if (that.entierAlea > entierSaisi) {
            console.log('Plus grand');
            return that.jouer();
        }

        if (that.entierAlea < entierSaisi) {
            console.log('Plus petit');
            return that.jouer();
        }

        console.log('Gagné');
        that.rl.close();
    });

};

module.exports = Jeu;