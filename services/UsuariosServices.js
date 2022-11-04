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
    let idParaRemover = usuarios.findIndex(u => u.id == idDoUsuarioParaRemover)
    usuarios.splice(idParaRemover,1);
}

function alterar(novosDados, idUsuario){
    const usuario = usuarios.find(usuario => usuario.id == idUsuario)
    console.log(usuario);

    let senhaCriptografada = bcrypt.hashSync(novosDados.senha, 10)

    usuario.nome = novosDados.nome;
    usuario.email = novosDados.email;
    usuario.senha = senhaCriptografada;

    console.log(usuario);
    salvar(usuarios);
}

function addEndereco(novoEndereco, idUsuario){
    var usuario = usuarios.find (usuario => idUsuario === usuario.id);
    usuario.enderecos = novoEndereco.enderecos;
    
    usuarios.push(usuario);
    salvar(usuario);
}

function removerEndereco(posicaoDoEndereco, idUsuario){
    let enderecoDoId = enderecos.findIndex (a => a.id == idUsuario)
    usuarios.splice(posicaoDoEndereco, 1);
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
    const usuario = usuarios.find(usuario => usuario.id == idUsuario)
    usuario.enderecos[posicaoDoEndereco] = novoEndereco;

    salvar(usuarios);
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    var pagamento = usuarios.find (pagamento => idUsuario === pagamento.id);
    usuario.formasDePagamento = novaFormaDePagamento.formasDePagamento;
    
    formasDePagamento.push(pagamento);
    salvar(pagamento);
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    let pagamentoDoId = formasDePagamento.findIndex (a => a.id == idUsuario)
    usuarios.splice(posicaoDaFormaDePagamento, 1); 
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    const usuario = usuarios.find(usuario => usuario.id == idUsuario)
    console.log(usuario);

    usuario.formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;

    console.log(usuario);
    salvar(usuarios);
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