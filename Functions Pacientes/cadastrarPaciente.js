const rl = require("../rl")

function pergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => resolve(resposta));
    });
}

async function cadastrarPaciente(arr){
    console.log("==== Cadastro ====\n")
    let nomeValido = await perguntarNome();
    let datavalida = await perguntarData();
    const dadosDeCadastro = {id:Date.now(),nome:nomeValido, nascimento:datavalida}

    arr.push(dadosDeCadastro);
}

async function perguntarNome(){
    let inputNome = await pergunta("nome: ")
        if (!inputNome || !isNaN(inputNome)){
            console.log(`O nome ${inputNome} não é valido como resposta!`)
            return perguntarNome();
        }
    return inputNome;
}

async function perguntarData(){
    let inputDataNascimento = await pergunta("Data: ")
    let data = inputDataNascimento.split("/").map(a=>parseInt(a))

    if (data.length !== 3) {
        console.log(`A data: ${inputDataNascimento} é inválida! Digite algo como (DD/MM/AAAA)`);
        return perguntarData();
    }
    
    for (let i = 0; i < data.length; i++){
        let limite;
        if (i === 0){limite = 31}
        if (i === 1){limite = 12}
        if (i === 2){limite = 20}

        let controleDeValidação = 2
        if(i === 2){controleDeValidação = 4}
        if(!data[i] || isNaN(data[i]) || data[i] > controleDeValidação || data[i] <= 0 || data[i] > limite){
            console.log(`A data: ${inputDataNascimento} é invalida! digte algo como (DD/MM/AAAA)`)
            return perguntarData();
        }
    }
    return inputDataNascimento
}

module.exports = cadastrarPaciente;