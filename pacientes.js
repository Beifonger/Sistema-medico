const rl = require("./rl")
const cadastrarPaciente = require("./Functions Pacientes/cadastrarPaciente.js")

const arrayDeteste = []

cadastrarPaciente(arrayDeteste)


function menupPaciente(arrPaciente){
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
            case 1: cadastrarPaciente(arrPaciente); break;
            case 2: listarPacientes(arrPaciente); break;
            case 3: editarPaciente(arrPaciente); break;
            case 4: excluirPaciente(arrPaciente); break;
            case 5: console.log("Saindo..."); rl.close(); break;
            default: console.log("Opção inválida."); menupPaciente(arrPaciente); break;
        }
    });
}



