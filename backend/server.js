const express = require('express');
const images = require('./data/images');
const app = express();
const port = 5000;

// use the express-static middleware
app.use(express.static(__dirname + '/images'));

// define the first route test
app.get('/', (req, res) => res.send('Hello World!'));

// define routes images
app.get('/images', (req, res) => {
    res.json(images);
});

// define routes individual images
app.get('/images/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const image = images.find(image => image.id === id);
    res.json(image);
});

// define routes individual images by path
app.get('/images/:path', (req, res) => {
    const path = req.params.path;
    const image = images.find(image => image.path === path);
    res.json(image);
});

// start the server listening for requests
app.listen(port, () => console.log(`Server listening on port ${port}!`));
