const express = require ("express");
let app = express();

app.get ("/titi", (req, res)=>res.send("Oi, meu amorzauumm"))

app.listen(1317, ()=>console.log("Servidor rodando"))
