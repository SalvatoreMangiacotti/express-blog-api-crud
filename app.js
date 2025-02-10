const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./routes/postroutes');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');


// Middlewares 

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


app.use("/route", postRoutes);


app.use(notFound);


// Global Level
app.use(errorsHandler);


// Routes specific
// app.use("/route", errorsHandler);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})