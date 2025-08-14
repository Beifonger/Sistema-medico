const rl = require("../rl");

function listar(arr){
    console.log(`==== Pacientes ====\n`)

    if(arr.length === 0){
        console.log(`Não há paciente cadastrado!`)
    }
    arr.forEach(variavelAtual => {
        console.log(`id:${arr.id},
        nome: ${arr.nome}, nascimento: ${arr.nascimento}
        `)
    });
return menuPaciente(arrPaciente)
}

module.exports = listar;