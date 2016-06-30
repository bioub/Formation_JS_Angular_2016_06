/*
const http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello');
});

server.listen(8080, function() {
   console.log('Le serveur est démarré');
});*/

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

var contacts = [{
    id: 3,
    prenom: 'Pascal',
    nom: 'Gentil',
    email: 'p.gentil@gmail.com'
}, {
    id: 7,
    prenom: 'Julien',
    nom: 'Bernard',
    telephone: '+33 6 24 25 06 34'
}];

var server = express();

server.use(morgan('dev'));
server.use(bodyParser.json());

// Middleware qui autorise les requêtes Cross-Domain
server.use(cors());
// server.use(function(req, res, next) {
//     var whiteList = [
//         'http://localhost:63342',
//         'http://autredomaine.autorise.com'
//     ];
//
//     var origin = req.headers.origin;
//
//     if (whiteList.indexOf(origin) !== -1) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//
//     next();
// });

/*server.get('/api/v1/contacts', function(req, res) {
    console.log('La page /api/v1/contacts est appelée');
});*/

server.get('/api/v1/contacts', function(req, res) {
    res.json(contacts);
});

server.post('/api/v1/contacts', function(req, res) {
    var contact = req.body; // grace à bodyParser

    contact.id = contacts[contacts.length-1].id + 1;
    contacts.push(contact);

    res.statusCode = 201; // CREATED
    res.json(contact);
});

server.get('/api/v1/contacts/:id', function(req, res, next) {
    var id = Number(req.params.id);

    var contact = contacts.find((contact) => contact.id === id);

    if (!contact) {
        return next();
    }

    res.json(contact);
});

server.use(function(req, res) {
    res.statusCode = 404;
    res.json({
       message: 'Cette page n\'existe pas'
    });
});

server.listen(8080, function() {
   console.log('Le serveur est démarré');
});