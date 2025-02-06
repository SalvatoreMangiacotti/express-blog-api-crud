const express = require('express');
const router = express.Router();


// Index

router.get('/', (req, res) => {

    res.send('Index, lista dei post');

})


// Show

router.get('/:id', (req, res) => {

    res.send('Dettagli dei post');

})


// Store

router.post('/', (req, res) => {

    res.send('Crea un nuovo post');

})


// Update

router.post('/', (req, res) => {

    res.send('Modifica integrale del post');

})


// Modify

router.patch('/:id', (req, res) => {

    res.send("Modifica parziale del post");

})


// Destroy

router.delete('/:id', (req, res) => {

    res.send("Eliminazione del post");

})

module.exports = router;