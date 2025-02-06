const postsList = require('../data/posts')


// Index

const index = (req, res) => {

    res.json(postsList);

}


// Show

const show = (req, res) => {

    const id = parseInt(req.params.id);

    const post = postsList.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json('404 Post Not found');

    }

    res.json(post);

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

    const id = parseInt(req.params.id);

    const post = postsList.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json('404 Post Not found');

    }

    postsList.splice(postsList.indexOf(post), 1);

    res.status(200).json({ message: 'Post cancellato con successo!' });
    
}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}