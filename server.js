const express = require('express');
const { createReadStream } = require('fs');
const boryParser = require('body-parser');

const app = express();
const port = 3000;

app.use(boryParser.urlencoded( {extended:false} ));

app.get('/', (req, res) => {
    createReadStream('index.html').pipe(res);
});

app.post('/login', (req, res) => {
    console.log('RECEBIDO');
    res.send('OKK');
});

app.listen(port, () => {
    console.log('== Server listening on port 3000 ==')
});