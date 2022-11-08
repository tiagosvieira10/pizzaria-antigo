const express = require('express');
const servidor = express();

servidor.get('/usuarios', (req, res)=>{
    console.log("chegou uma requisição");
    // res.send("Permaneça em linha!");
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.listen(3000);
