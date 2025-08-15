const rl = require("../rl")
const listar = require("./listarPacientes")

function pergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => resolve(resposta));
    });
}

async function excluir(arr,retornoAoMenu){

    listar(arr,false)
    let inputExcluir = parseInt(await pergunta("Qual o Id do paciente para excluir:"))

    for (let i = 0; i < arr.length; i++){
        if (inputExcluir === arr[i].id){
            arr.splice(i,1)
            console.log(`Excluido com sucesso!\n`)
            return retornoAoMenu(arr)           
        }
    }


    

    



}

module.exports = excluir;