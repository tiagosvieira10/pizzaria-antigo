const usuarios = require('../databases/usuarios.json');

function listar(){
    console.table(usuarios.map(
        u => {
            return{
                id: u.id,
                nome: u.nome,
                email: u.email,
            }
        }
    ))
}
function nome (){
    
    console.table(usuarios.map(
            a => {
                return a.nome  
            }
        ))
    }
    
function salvar(arrayDeUsuarios){
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

const bcrypt = require('bcrypt');

function cadastrar(objeto){
    let senhaCriptografada = bcrypt.hashSync(objeto.senha, 10);
    let novoId = usuarios[usuarios.length - 1].id + 1;

    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCriptografada,
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }
    usuarios.push(usuario);
    salvar(usuarios);
}

function detalhar(idUsuario){

    console.table(usuarios.map(
        idUsuario => { 
            return {
            nome: idUsuario.nome,
            email: idUsuario.email,
            endereco: [idUsuario.enderecos],
            formasDePagamento: [idUsuario.formasDePagamento]
        }
        }
    ))
}

function remover(idDoUsuarioParaRemover){
    
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    nome,
    salvar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;