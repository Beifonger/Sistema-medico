const rl = require("../rl");


function listar(arr, confimacao, retornoAoMenu) {

    if (confimacao) { console.log(`==== Pacientes ====`) }
    if (arr.length === 0) { console.log(`Não há paciente cadastrado!`) }

    arr.forEach(variavelAtual => {
    console.log(`
    id:${variavelAtual.id},
    nome: ${variavelAtual.nome}, nascimento: ${variavelAtual.nascimento}`)
    });

    console.log(``)
    if (confimacao) {
        return retornoAoMenu(arr)
    }
}

module.exports = listar;
