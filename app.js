const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./routes/postroutes');
const errorsHandler = require('./middlewares/errorsHandler');
const notFound = require('./middlewares/notFound');
const cors = require('cors');


// Middlewares 

app.use(express.static('public'));
app.use(express.json());

// CORS module

app.use(cors({ origin: 'http://localhost:5173/' }))

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


app.use("/route", postRoutes);


// app.use(notFound);


// Global Level
app.use(errorsHandler);


// Routes specific
// app.use("/route", errorsHandler);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})