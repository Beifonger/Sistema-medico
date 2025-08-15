const rl = require("../rl");
const listarPacientes = require("./listarPacientes.js")

function pergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => resolve(resposta));
    });
}

async function editarPaciente(arr,retornoAoMenu){
    console.log(`==== Editar ====`)
    listarPacientes(arr,false);

    let idSelecionado = parseInt(await pergunta("id: "))
    if(!idSelecionado || isNaN(idSelecionado)|| idSelecionado.toString().length !== 13){
        console.log(`O id ${idSelecionado} não é valido!`)
        return editarPaciente(arr,retornoAoMenu);
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i].id === idSelecionado){
            let novoNome = await pergunta("Novo nome: ")
            let novaData = await pergunta("Nova data: ")

            arr[i].nome = novoNome
            arr[i].nascimento = novaData

            console.log(`Editado com sucesso!\n`)
            return retornoAoMenu(arr)
        }
    }
}

module.exports = editarPaciente;
