// Index

const index = (req, res) => {

    res.send('Index, lista dei post');

}


// Show

const show = (req, res) => {

    res.send('Dettagli dei post');

}


// Store

const store = (req, res) => {

    res.send('Crea un nuovo post');

}


// Update

const update = (req, res) => {

    res.send('Modifica integrale del post');

}


// Modify

const modify = (req, res) => {

    res.send("Modifica parziale del post");

}


// Destroy

const destroy = (req, res) => {

    res.send("Eliminazione del post");

}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}