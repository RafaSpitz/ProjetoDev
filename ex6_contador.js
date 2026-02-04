const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

contar();

function contar(){
    rl.question("Digite um número N para que seja feita uma contagem de 1 a N: ", (limite) => {
        const resposta = Number(limite);
        if(Number.isNaN(resposta) || resposta < 1){
            console.log("Digite um número positivo inteiro.");
            return contar();
        }
        else{
            for(let i=0; i<resposta; i++){
                console.log(i+1);
            }
            rl.close();
        }
    })
}