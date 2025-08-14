const rl = require("../rl");
const listarPacientes = require("./listarPacientes.js")

function pergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => resolve(resposta));
    });
}

async function editarPaciente(arr){
    listarPacientes();

    let idSelecionado = parseInt(await pergunta("id do paciente que vc deseja editar: "))
    if(!idSelecionado || isNaN(idSelecionado)|| toString(idSelecionado).length !== "13"){
        console.log(`O id ${idSelecionado} não é valido!`)
        return editarPaciente();
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i].id === idSelecionado){
            let novoNome = await pergunta("Novo nome: ")
            let novaData = await pergunta("Nova data: ")

            arr[i].nome = novoNome
            arr[i].nascimento = novaData
        }

    }
}
