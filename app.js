const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./routes/postroutes');


// Middlewares 

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

app.use("/route", postRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})