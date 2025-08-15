const rl = require("../rl.js")
const cadastrarPaciente = require("./cadastrarPaciente.js")
const listarPacientes = require("./listarPacientes.js")
const editarPaciente = require("./editarPaciente.js")
const excluirPaciente = require("./excluirPaciente.js")

function menuPaciente(arrPaciente){

    console.log("==== Menu paciente ====")
    console.log(`
    1 - Cadastrar:
    2 - Listar:
    3 - Editar:
    4 - Excluir:
    5 - sair:
    `)
    rl.question("resposta: ",(inputresposta)=>{
        const rmp = parseFloat(inputresposta)

        switch(rmp){
            case 1: cadastrarPaciente(arrPaciente, menuPaciente); break;
            case 2: listarPacientes(arrPaciente,true, menuPaciente); break;
            case 3: editarPaciente(arrPaciente,menuPaciente); break;
            case 4: excluirPaciente(arrPaciente,menuPaciente); break;
            case 5: console.log("Saindo..."); rl.close(); break;
            default: console.log("Opção inválida."); menuPaciente(arrPaciente); break;
        }
    });
}

module.exports = menuPaciente;


