const express = require('express');
const app = express();
const port = 3000;
const postRoutes = require('./routes/postroutes');


// Middlewares 

app.use(express.static('public'));
app.use("/postroutes", postRoutes);


app.get('/', (req, res) => {
  res.send('Server del mio blog');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})