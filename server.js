const express = require('express');
const { createReadStream } = require('fs');
const boryParser = require('body-parser');

const app = express();
const port = 3000;

const USERS = {
    admim : 123,
    luana : 123
};

app.use(boryParser.urlencoded( {extended:false} ));

app.get('/', (req, res) => {
    createReadStream('index.html').pipe(res);
});

app.get('/fundo_tela_inicial.jpg', (req,res) => {
    createReadStream('fundo_tela_inicial.jpg').pipe(res);
});

app.get('/login', (req, res) => {
    res.send("<script>alert('se voce for a luana senha 123')</script>");
})

app.post('/login', (req, res) => {
    const username = req.body.user;
    const password = req.body.pass;

    console.log(' %s ' ,username);

    const real_pass = USERS[req.body.user] || null;
    
    if(real_pass === null){
        createReadStream('usuario_falhou.html').pipe(res);
    }
    else{
        if(real_pass == password){
            createReadStream('luana.html').pipe(res);
        }
        else{
            createReadStream('usuario_falhou.html').pipe(res);
        }
    }
});

app.listen(port, () => {
    console.log('== Server listening on port 4000 ==')
});