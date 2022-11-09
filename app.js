const express = require('express');
const path = require('path');

const servidor = express();
servidor.use(express.static(path.join(__dirname, 'public/img')))

servidor.get('/', (req, res)=>{
    console.log("chegou uma requisição");
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.get('/carrinho', (req,res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html");
})

servidor.listen(3000);
