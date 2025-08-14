const rl = require("../rl")

function cadastrarPaciente(arr){
    console.log("==== Cadastro ====\n")
}

function perguntarNome(){
    rl.question("nome: ",(inputNome)=>{
        if (!nome || !isNaN(inputNome)){
            console.log(`O nome ${inputNome} não é valido como resposta!`)
            return perguntarNome();
        }
        return inputNome;
    })
}

function perguntarData(){
    rl.question("Data de nascimento (exemplo: 28/01/2005): ",(inputDataNascimento)=>{
    let data = inputDataNascimento.split("/") // array da data

    //conferir DADOS
    for (let i = 0; i < data.length; i++){
        if(!data[i]){
            console.log(`A data: ${inputDataNascimento} é invalida! digte algo como (XX/XX/XXXX)`)
            return perguntarData();
        }
        
    }



    let nascimento = {dia:data[0], mes:data[1], ano:data[2]}


    });
}





module.exports = cadastrarPaciente;