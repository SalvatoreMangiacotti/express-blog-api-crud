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

    // const postsListIndex = postsList[postsList.length - 1];
    // const postId = postsListIndex.id;
    // const newId = postId + 1;

    const newId = postsList[postsList.length - 1].id + 1;

    const newPost = {

        id: newId,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags

    }

    postsList.push(newPost);

    console.log(postsList);

    res.status(201);
    res.json(newPost);

}


// Update

const update = (req, res) => {

    const id = parseInt(req.params.id);

    const post = postsList.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json('404 Post Not found');

    }

    req.body.title ? post.title = req.body.title : post.title = post.title;
    req.body.slug ? post.slug = req.body.slug : post.slug = post.slug;
    req.body.content ? post.content = req.body.content : post.content = post.content;
    req.body.image ? post.image = req.body.image : post.image = post.image;
    req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

    console.log(postsList);

    res.json(post);

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

    console.log(postsList);

    res.json('Post cancellato con successo!');

    res.status(204);

}


module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}